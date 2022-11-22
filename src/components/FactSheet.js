import React, { useState } from "react";
import Quickfact from "./Quickfact";
import PieCharter from "./PieCharter";

export default function FactSheet(props) {
  const result = props.result;
  const schoolDemographics = result.latest.student.demographics;
  console.log(result);
  return (
    <div className="factsheet-wrapper">
      <h1>{result.school.name}</h1>
      <h5>{result.school.city + ", " + result.school.state}</h5>
      <div className="quickfacts-wrapper">
        <Quickfact
          title={"Acceptance Rate"}
          data={result.latest.admissions.admission_rate.overall}
          format={"percent"}
        />
        <Quickfact
          title={"Average ACT"}
          data={result.latest.admissions.act_scores.midpoint.cumulative}
        />
        <Quickfact
          title={"Average SAT"}
          data={result.latest.admissions.sat_scores.average.overall}
        />
        <Quickfact
          title={"Graduation Rate"}
          data={result.latest.completion.consumer_rate}
          format={"percent"}
        />
        <Quickfact
          title={"Average Cost"}
          data={result.latest.cost.avg_net_price.overall}
          format={"money"}
        />
      </div>
      <div className="h-stack">
        <PieCharter
          data={[
            {
              title: "White",
              value: schoolDemographics.race_ethnicity.white,
              color: "#8b5cf6",
            },
            {
              title: "Black",
              value: schoolDemographics.race_ethnicity.black,
              color: "#7c3aed",
            },
            {
              title: "Asian",
              value: schoolDemographics.race_ethnicity.asian,
              color: "#6d28d9",
            },
            {
              title: "Hispanic",
              value: schoolDemographics.race_ethnicity.hispanic,
              color: "#5b21b6",
            },
            {
              title: "Other",
              value:
                schoolDemographics.race_ethnicity.aian +
                schoolDemographics.race_ethnicity.nhpi +
                schoolDemographics.race_ethnicity.unknown +
                schoolDemographics.race_ethnicity.two_or_more +
                schoolDemographics.race_ethnicity.non_resident_alien,
              color: "#4c1d95",
            },
          ]}
        />
      </div>
    </div>
  );
}
