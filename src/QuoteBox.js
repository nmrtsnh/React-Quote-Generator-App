import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const { content, author } = response.data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.log("Error fetching quote", error);
    }
  };
  return (
    <div
      className=" bg-[#E5E1DA] flex flex-col justify-center items-center px-8 py-10 border-gray-300 shadow-lg w-max z-2   "
      style={{ zIndex: 2 }}
    >
      <span className="text-3xl pb-10 ">"{quote}"</span>

      <p className="text-2xl pb-12 italic">-{author}</p>

      <div name="quote-btn">
        <button
          class=" bg-red-700 hover:bg-red-500 text-white font-bold py-3 px-5 rounded cursor-pointer"
          onClick={fetchQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
