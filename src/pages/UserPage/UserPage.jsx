import "./UserPage.css"
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import WeightFollowUp from "../../components/WeightFollowUp/WeightFollowUp";
import Score from "../../components/Score/Score";
import Durations from "../../components/Durations/Durations";
import Profil from "../../components/Profil/Profil";
import Welcome from "../../components/Welcome/Welcome";
import Calories from "../../components/Calories/Calories"
import {useParams} from "react-router-dom";

const UserPage = ()=>{
    const { userId } = useParams();

    return(
    <div className="grid">
            <Header />
            <SideNav />
            <Welcome/>
            <WeightFollowUp userId={userId} />
            <div className="display-frame">
                <Durations userId={userId} />
                <Profil />
                <Score />
            </div>
            <Calories />
    </div>
    )
}

export default UserPage