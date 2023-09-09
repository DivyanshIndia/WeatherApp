import { useState } from "react";
import Search from "./Search";
import classes from "./Weathercard.module.css";
import sun from "./sun.png";
import Showdata from "./Showdata";

const Weathercard = () => {
  const [data, setData] = useState(null);



  return (
    <div className={classes.wCard}>
      <Search setData={setData}/>
      {data  && <Showdata data={data}/>}
    
      {!data && (
        <div>
        <div className={classes.row}>
          {" "}
          <div className={classes.circle}>
            {" "}
            <img src={sun} alt="sun" />{" "}
          
          </div>
        </div>
        <p>Enter the city Name in the Search Bar for Details</p>
         </div>
      )}
    </div>
  );
};

export default Weathercard;
