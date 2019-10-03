import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const About = () => {
  const [rates, setRates] = useState({});

  function iterateRatesObject() {
    Object.keys(rates).forEach(key => {
        ratesArr.push(rates[key].name);
      });
  }

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchange_rates")
      .then(res => setRates(res.data.rates))
      .catch(err => console.log(err));
  }, []);

  const iterateRates = () => {
    Object.keys(rates).forEach(key => {
      console.log(rates[key].name);
    });
  };

  const ratesArr = []


  console.log(ratesArr);


  return (
    <div className="home">
      <Navbar />
      <h1>Conversion Rates</h1>
    </div>
  );
};

export default About;
