import React from "react";
import MyConfetti from "./MyConfetti";
import "./styles.css";
import QuoteBox from "./QuoteBox";

function App() {
  return (
    <div className="">
      <MyConfetti />
      <div className="  flex justify-center items-center pt-72 mx-auto ">
        <QuoteBox />
      </div>
    </div>
  );
}

export default App;
