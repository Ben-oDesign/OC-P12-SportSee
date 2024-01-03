import React, { useEffect, useState } from "react";
import "./Durations.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types';
import DataModel from "../../API_calls/ModelData"; // Importez votre classe de modélisation

class DurationsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      statistics: null,
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    this.setState({ userId });
    this.fetchData(userId);
  }

  fetchData = (userId) => {
    const dataModel = new DataModel();
    dataModel.fetchData(userId, "average-sessions")
        .then(response => {
          this.setState({ statistics: response });
          console.info(response);
        })
        .catch(error => {
          console.info(error);
        });
  }

  formatData = () => {
    const { statistics } = this.state;

    if (!statistics) {
      return [];
    }

    return statistics.map((data) => {
      switch (data.day) {
        case 1:
          return { day: "L", sessionLength: data.sessionLength };
        case 2:
          return { day: "M", sessionLength: data.sessionLength };
        case 3:
          return { day: "M", sessionLength: data.sessionLength };
        case 4:
          return { day: "J", sessionLength: data.sessionLength };
        case 5:
          return { day: "V", sessionLength: data.sessionLength };
        case 6:
          return { day: "S", sessionLength: data.sessionLength };
        case 7:
          return { day: "D", sessionLength: data.sessionLength };
        default:
          return undefined;
      }
    });
  }

  render() {
    const { statistics } = this.state;

    const CustomTooltip = ({ active, payload}) => {
      if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-duration">
              <p className="duration-label">{`${payload[0].value} min`}</p>
            </div>
        );
      }

      return null;
    };

    CustomTooltip.propTypes = {
      active : PropTypes.bool,
      payload : PropTypes.array
    }

    return (
        <div className="linechart_container">
          <h2 className="duration_title">Durée moyenne des sessions</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={this.formatData()}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0
                }}
            >
              <CartesianGrid horizontal={false} vertical={false} strokeDasharray="4 4" fill = "#E60000"/>
              <XAxis interval="preserveStartEnd"  dataKey="day" tickLine={false} mirror={true} tick={{stroke: '#FFFFFF', strokeWidth: 0.5, mixBlendMode : "normal", fontSize : "12px"}} />
              <YAxis hide={true} dataKey="sessionLength" padding={{top : 80, bottom : 50}} />
              <Tooltip content={<CustomTooltip />} cursor={{stroke : "rgba(0, 0, 0, 0.1)", strokeWidth : 79}} />
              <Line
                  type="natural"
                  dataKey="sessionLength"
                  stroke="white"
                  strokeWidth={2}
                  dot={false}
                  activeDot = {{stroke : "rgba(255, 255, 255, 0.198345)", strokeWidth : "10px", r: 5}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
    );
  }
}

DurationsChart.propTypes = {
  userId: PropTypes.string,
};

export default DurationsChart;