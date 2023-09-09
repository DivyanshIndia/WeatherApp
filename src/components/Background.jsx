import React from "react";

import classes from "./Background.module.css";
import Weathercard from "./Weathercard";

const Background = () => {
  return (
    <div className={classes.mainContainer}>
      <Weathercard />
    </div>
  );
};

export default Background;
