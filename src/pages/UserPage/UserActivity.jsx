import './UserActivity.css'
import WeightFollowUp from '../../components/WeightFollowUp/WeightFollowUp'
import {useParams} from "react-router-dom";

export default function UserActivity(){
    return(
        <div className="user_activity">
            <WeightFollowUp userId={userId} />
        </div>
    )
}