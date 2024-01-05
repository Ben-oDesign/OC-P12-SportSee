import USER_ACTIVITY from "../mock/user_activity"
import USER_AVERAGE_SESSIONS from "../mock/user_average_sessions"
import USER_MAIN_DATA from "../mock/user_main_data"
import USER_PERFORMANCE from "../mock/user_performance"

class DataModel {
    constructor(setStatistics) {
        this.setStatistics = setStatistics;
    }

    fetchData = async (userId, resource) => {
        const userIdNumber = parseInt(userId, 10);

        if (isNaN(userIdNumber)) {
            console.error('userId n\'est pas une chaîne de caractères représentant un nombre.');
            return Promise.reject(new Error('userId is not a valid number.'));
        }

        if (process.env.REACT_APP_MOCK_DATA) {
            // Call mock data if variable REACT_APP_MOCK_DATA is true
            return new Promise((resolve, reject) => {
                if (resource === "activity") {
                    const userActivity = USER_ACTIVITY.filter((user) => {
                        if (user.userId === userIdNumber) {
                            resolve(user.sessions);
                        }
                        reject(new Error(`No data found for user ${userId} and resource ${resource}`));
                    });
                    this.setStatistics(userActivity);
                } else if (resource === "performance") {
                    const userPerformance = USER_PERFORMANCE.filter((user) => {
                        if (user.userId === userIdNumber) {
                            resolve(user);
                        }
                        reject(new Error(`No data found for user ${userId} and resource ${resource}`));
                    });
                    this.setStatistics(userPerformance);
                } else if (resource === "average-sessions") {
                    const userPerformance = USER_AVERAGE_SESSIONS.filter((user) => user.userId === userIdNumber);

                    if (userPerformance.length > 0) {
                        resolve(userPerformance[0].sessions);
                    } else {
                        reject(new Error(`No data found for user ${userIdNumber} and resource ${resource}`));
                    }
                }
            });
        } else {
            // Fetch API if REACT_APP_MOCK_DATA is false
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch(`http://localhost:3000/user/${userId}/${resource}`);

                    if (response.status !== 404) {
                        const results = await response.json();

                        if (resource === "activity") {
                            this.setStatistics(results.data.sessions);
                        } else if (resource === "performance") {
                            this.setStatistics(results.data.data);
                        } else if (resource === "average-sessions") {
                            this.setStatistics(results.data.sessions);
                        }
                    }
                    resolve(response);
                } catch (err) {
                    reject(err);
                }
            });
        }
    };
}

export default DataModel;