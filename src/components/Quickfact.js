import React from "react";

export default function Quickfact(props) {
  var data = props.data;
  if (data === null) {
    data = "N/A";
  } else {
    if (props.format != undefined) {
      if (props.format === "percent") {
        data = data * 100;
        data = Math.round(data) + "%";
      }
      if (props.format === "money") {
        data = "$" + Intl.NumberFormat("en-us").format(data);
      }
    }
  }
  if (data === null) {
    data = "N/A";
  }
  return (
    <div className="quickfact-wrapper">
      <h3>{data}</h3>
      <h4>{props.title}</h4>
    </div>
  );
}
