import './UserAverageSession.css'
import Durations from "../../components/Durations/Durations"
import { useParams } from "react-router-dom";

export default function UserAverageSession(){
    const { userId } = useParams();

    return(
        <div className="user_average_session">
            <Durations userId={userId} />
        </div>
    )
}