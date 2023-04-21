import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  console.log(data);

  return (
    <>
      <div className="fp">
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
          </>
        )}
      </div>
      <div className="allHotel">
        <Link to="/all-hotels">
          <button className="btn1">See All</button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedProperties;
