import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import "./AllHotels.css";

const AllHotels = () => {
  const { data, loading, error } = useFetch("/hotels");
  return (
    <>
      <Navbar />
      <div className="fp aHotel">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
              <Link to={`/hotels/${item._id}`}>
                <div className="fpItem" key={item._id}>
                  <img src={item.photos[0]} alt="" className="fpImg" />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity">{item.city}</span>
                  <span className="fpPrice">
                    Starting from ${item.cheapestPrice}
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
          </>
        )}
      </div>
    </>
  );
};

export default AllHotels;
