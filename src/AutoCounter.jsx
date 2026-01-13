import React from "react";
import CountUp from "react-countup";

const AutoCounter = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>
        Counter:{" "}
        <CountUp
          start={0}       // starting value
          end={100}      // ending value
          duration={10}   // duration in seconds
        />

        
      </h2>
    </div>
  );
};

export default AutoCounter;
