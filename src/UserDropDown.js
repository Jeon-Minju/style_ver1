import React, { Fragment } from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  dropDown: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

export default function UDD() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.dropDown} style={{ color: "#434f5b" }}>
        안녕하세요, <span style={{ fontWeight: "bold" }}>안다혜</span> 님
      </div>
    </Fragment>
  );
}
