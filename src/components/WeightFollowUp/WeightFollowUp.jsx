import "./WeightFollowUp.css"
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types';
import {fetchData} from "../../API_calls/APIcall";

export default function WeightFollowUp() {
    const {userId} = useParams()
    const [statistics, setStatistics] = useState(null)

    useEffect(() => {
        fetchData(userId, setStatistics, "activity")
            .then(response => {
                if (response.status === 404) {
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const formatData = () => {
        let counter = 0
        const dataToUse = statistics.map((data) => {
            counter++
            return {
                day: `${counter}`,
                kilogram: data.kilogram,
                calories: data.calories
            }
        })
        return dataToUse
    }


    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="kilos">{`${payload[0].value}kg`}</p>
                    <p className="calorie-number">{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }

        return null;
    };

    CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array
    }

    const renderLegend = () => {
        return (
            <ul className="barchart_legend">
                <li className="dot_weight"><span className="span_weight">Poids (kg)</span></li>
                <li className="dot_calories"><span className="span_calories">Calories brûlées (kCal)</span></li>
            </ul>
        )
    }


    return (
        <div className="bar-chart_container">
            <h2 className="title_barchart">Activité quotidienne</h2>
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <BarChart
                    data={statistics && formatData()}
                    margin={{top: 80, right: 48, bottom: 32, left: 48}}
                    barGap={8}
                    maxBarSize={7}
                    barCategoryGap="35%"
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis
                        dataKey="day"
                        dy={16}
                        axisLine={false}
                        tickLine={false}
                        tickMargin={16}
                        tick={{fontSize: 14, fontWeight: 500}}
                    />
                    <YAxis
                        yAxisId="kg"
                        dataKey="kilogram"
                        domain={["dataMin -1", "dataMax -1"]}
                        allowDecimals={false}
                        dx={48}
                        orientation="right"
                        tickCount="3"
                        axisLine={false}
                        tickLine={false}
                        tick={{fontSize: 14, fontWeight: 500}}
                    />
                    <YAxis
                        yAxisId="cal"
                        dataKey="calories"
                        domain={[0, "dataMax"]}
                        hide={true}
                    />
                    <Bar
                        yAxisId="kg"
                        dataKey="kilogram"
                        maxBarSize={8}
                        fill="#282D30"
                        radius={[50, 50, 0, 0]}
                    />
                    <Bar
                        yAxisId="cal"
                        dataKey="calories"
                        maxBarSize={8}
                        fill="#E60000"
                        radius={[50, 50, 0, 0]}
                    />
                    <Tooltip itemStyle={{
                        backgroundColor: "#E60000",
                        color: "white"
                    }} contentStyle={{backgroundColor: "#E60000"}} content={
                        <CustomTooltip active/>} allowEscapeViewBox={{
                        x: true,
                        y: true
                    }} cursor={{fill: "rgba(196, 196, 196, 0.5)"}}/>
                    <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} content={renderLegend}/>

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}