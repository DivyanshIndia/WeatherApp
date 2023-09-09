import React, { useEffect, useState } from "react";
import classes from "./Showdata.module.css";
import wesun from "./wesun.png"
import softbottom from './softbottom.png'
import ripcurrent from './ripcurrent.png'
import lake from './lake.png'
import beach from './beach.png'
const Showdata = ({ data }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(new Date());
  const weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getDate = () => {
    let d = new Date();
    let day = weekday[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    let res = `${day}, ${month} ${d.getDate()}, ${year}`;
    if (res !== date) {
      setDate(res);
    }
  };

  getDate();

  useEffect(() => {
    const timeChange = setInterval(() => {
      let now = new Date();
      setTime(now);
    }, 1000);
    return () => {
      clearInterval(timeChange);
    };
  }, [time]);

  return (
    <div className={classes.box}>
      <div className={classes.blur}>
        {" "}
        <div className={classes.big}>{data.name}</div>
        <div>
          {date} {time.toLocaleTimeString()}
        </div>
      </div>

      <div className={classes.linear}>
        <div>
          {" "}
          <div className={classes.big}>{data.main.temp}&deg;C</div>
          <div style={{ fontSize: "2rem" }}>{data.weather[0].description}</div>
        </div>
        <div>
          <img src={wesun} alt="cond" />
        </div>
      </div>
      <div className={classes.huwind}>
        <div>Humidity : {data.main.humidity}%</div>
        <div>Wind Speed : {data.wind.speed} kph</div>
      </div>
      <div className={classes.photos}>
      <img  className={classes.c} src={lake} alt='lake'/>
      <img  className={classes.c} src={softbottom} alt='lake'/>
      <img  className={classes.c} src={beach} alt='lake'/>
      <img  className={classes.c} src={ripcurrent} alt='lake'/>

      </div>
    </div>
  );
};

export default Showdata;
