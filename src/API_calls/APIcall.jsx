import USER_ACTIVITY from "../mock/user_activity"
import USER_AVERAGE_SESSIONS from "../mock/user_average_sessions"
import USER_MAIN_DATA from "../mock/user_main_data"
import USER_PERFORMANCE from "../mock/user_performance"

export async function fetchData(userId, setStatistics, resource) {

    const userIdNumber = parseInt(userId, 10);

    if (isNaN(userIdNumber)) {
        console.error('userId n\'est pas une chaîne de caractères représentant un nombre.');
        return; // ou gérer l'erreur d'une autre manière selon vos besoins
    }

    if (process.env.REACT_APP_MOCK_DATA) {
        // REACT_APP_MOCK_DATA is true
        return new Promise(async (resolve, reject) => {
            if (resource === "activity") {
                const userActivity = USER_ACTIVITY.filter((user) => {
                    if (user.userId == userId) {
                         resolve(user.sessions);
                    }
                    reject(new Error(`No data found for user ${userId} and resource ${resource}`));
                })
                setStatistics(userActivity)
            } else if (resource === "performance") {
                const userPerformance = USER_PERFORMANCE.filter((user) => {
                    if (user.userId == userId) {
                        resolve(user);
                    }
                    reject(new Error(`No data found for user ${userId} and resource ${resource}`));
                })
                setStatistics(userPerformance)
            } else if (resource === "average-sessions") {
                const userPerformance = USER_AVERAGE_SESSIONS.filter((user) => {
                    return user.userId === userIdNumber;
                });



                if (userPerformance) {
                    resolve(userPerformance[0].sessions);
                } else {
                    reject(new Error(`No data found for user ${userIdNumber} and resource ${resource}`));
                }
            }
        });
    }
    else {
        // REACT_APP_MOCK_DATA is false
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}/${resource}`);

                if (response.status !== 404) {
                    const results = await response.json();

                    if (resource === "activity") {
                        setStatistics(results.data.sessions)
                    } else if (resource === "performance") {
                        setStatistics(results.data.data)
                    } else if (resource === "average-sessions") {
                        setStatistics(results.data.sessions)
                    }
                }
                resolve(response);
            } catch (err) {
                reject(err);
            } finally {
            }
        })
    }
}

export async function fetchScoreData(userId, setStatistics) {
    // REACT_APP_MOCK_DATA is true
    if (process.env.REACT_APP_MOCK_DATA) {
        const todayScore = USER_MAIN_DATA.filter((user) => {
            if (user.id == userId) {
                return user.todayScore
            }
            return false
        })
        setStatistics(todayScore)
    }
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`)
        const results = await response.json()

        results.data.score ? setStatistics(results.data.score) : setStatistics(results.data.todayScore)
    } catch (err) {
    } finally {
    }


}

export async function fetchConsumptionData(userId, setStatistics) {
    // REACT_APP_MOCK_DATA is true
    if (process.env.REACT_APP_MOCK_DATA === true) {
        const todayScore = USER_MAIN_DATA.filter((user) => {
            if (user.id == userId) {
                return user.keyData
            }
            return false
        })
        setStatistics(todayScore)
    }
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`)
        const results = await response.json()
        setStatistics(results.data.keyData)
    } catch (err) {
    } finally {
    }
}