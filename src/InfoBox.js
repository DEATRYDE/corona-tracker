import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, isInfected, active, today, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isInfected && "infoBox--red"
      }`}
    >
      <CardContent>
        <div
          className={`infoBox__cases ${
            !isInfected && "infoBox__cases--default"
          }`}
        >
          <div className="infoBox__title">{title} </div> {cases}
        </div>
        <Typography className="infoBox__today" color="textSecondary">
          Today: {today}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
