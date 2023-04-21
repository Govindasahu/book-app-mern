import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./City.css";

const City = () => {
  const [bCity, setbCity] = useState([]);

  const bData = async () => {
    const { data } = await axios.get("/hotels?city=bhilai");
    console.log(data);
    setbCity(data);
  };

  useEffect(() => {
    bData();
  }, []);

  return (
    <>
      <Navbar />
      <h2 className="cheading">Hotels of Bhilai</h2>
      <div className="fp aHotel">
        {bCity.map((item) => (
          <Link to={`/hotels/${item._id}`}>
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from {item.cheapestPrice} Rs
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default City;
