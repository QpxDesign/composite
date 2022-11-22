import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function PieCharter(props) {
  var data = props.data;
  return (
    <PieChart
      className="piechart"
      data={data}
      label={(data) =>
        Math.round(data.dataEntry.value * 100) + "% \n" + data.dataEntry.title
      }
      labelPosition={65}
      labelStyle={{
        fontColor: "#FFFFFF",
        fontSize: ".4em",
        fontWeight: "800",
      }}
    />
  );
}
