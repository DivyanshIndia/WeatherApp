import React, { useState } from "react";
import classes from "./Search.module.css";
import search from "./search.png";

const Search = ({ setData }) => {
  const [city, setCity] = useState("");

  const submitHandler = () => {
    const getWeatherData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        alert("Enter valid city name");
      }
    };
    getWeatherData();
  };
  return (
    <div className={classes.contain}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={classes.textType}
      />
      <button className={classes.icon} onClick={submitHandler}>
        <img src={search} alt="search" />
      </button>
    </div>
  );
};

export default Search;
