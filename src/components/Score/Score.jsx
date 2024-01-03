import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { RadialBarChart, RadialBar, ResponsiveContainer} from "recharts";
import PropTypes from "prop-types";
import "./Score.css"
import { fetchScoreData } from "../../API_calls/APIcall";


export default function Score() {

  const {userId} = useParams()
  const [statistics, setStatistics] = useState(null)

  useEffect(()=>{
    fetchScoreData(userId, setStatistics)
  }, [])

  const formatData = ()=>{
    return [{
      name : "score",
      value : statistics * 100,
      fill : "#E60000"
    },
    {
      name : "score 2",
      value : 100,
      fill : "#FBFBFB"
    }
  ]
  }

  return (
    <div className="score-container">
      <div className="score-title_container">
        <div className="white-circle">
        <h2 className="score-title">Score</h2>
        <p className="score-sentence"><span className="percentage">{statistics && statistics*100 + "%"}</span><br></br> de votre objectif</p>
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadialBarChart
          innerRadius="71%"
          outerRadius="95%"
          data={statistics && formatData()}
          startAngle = {210}
          endAngle = {-150}
        >

          <RadialBar
            minAngle={15}
            background = {{fill : "#FBFBFB"}}
            clockWise={true}
            dataKey="value"
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}