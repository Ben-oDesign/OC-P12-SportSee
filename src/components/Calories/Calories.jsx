import "./Calories.css"
import React, {useEffect, useState} from "react";
import calories from "../../Assets/calories-icon.svg"
import protein from "../../Assets/protein-icon.svg"
import carbs from "../../Assets/carbs-icon.svg"
import fat from "../../Assets/fat-icon.svg"
import { useParams } from "react-router-dom";
import { fetchConsumptionData } from "../../API_calls/APIcall";

const Calories = ()=>{

    const {userId} = useParams()
    const [statistics, setStatistics] = useState(null)

    useEffect(()=>{
        fetchConsumptionData(userId, setStatistics)
      }, [])

  

    return(
        <div className="icon-container">
            <div className="icon-label">
                <div className="icon-frame"> 
                    <img className="icon_colored" src={calories} alt="calories" />
                </div>
                <div className="text-frame">
                    <span className="quantity">{statistics && statistics.calorieCount/1000} kCal</span>
                    <span className="icon-description" >Calories</span>
                </div>
            </div>
            <div className="icon-label">
                <div className="icon-frame">
                    <img className="icon_colored" src={protein} alt="protéines" />
                </div>
                <div className="text-frame">
                    <span className="quantity">{statistics && statistics.carbohydrateCount}g</span>
                    <span className="icon-description">Proteines</span>
                </div>
            </div>
            <div className="icon-label">
                <div className="icon-frame">
                    <img className="icon_colored" src={carbs} alt="glucides" />
                </div>
                <div className="text-frame">
                    <span className="quantity">{statistics && statistics.lipidCount}g</span>
                    <span className="icon-description">Glucides</span>
                </div>
            </div>
            <div className="icon-label">
                <div className="icon-frame">
                    <img className="icon_colored" src={fat} alt="Lipides" />
                </div>
                <div className="text-frame">
                    <span className="quantity">{statistics && statistics.proteinCount}g</span>
                    <span className="icon-description">Lipides</span>
                </div>
            </div>
        </div>
    )
}

export default Calories