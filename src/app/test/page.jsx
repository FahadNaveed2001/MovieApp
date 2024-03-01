"use client";

import React, { useState, useEffect } from "react";
import { data } from "./data"



export default function Test() {
    const [number, setNumber] = useState(1);

    const handleInputChange = (event) => {
        setNumber(event.target.value);
      };

      const selectedData = data.find((item) => item.number === parseInt(number));


  return (
    <div className="min-h-[100vh] text-white justify-center">
        <div className="h-20"></div>
    <div className="text-black">

      <input type="number" value={number} onChange={handleInputChange} placeholder="Enter a number" />
    </div>

    {selectedData && (
  <div>
    <h1>{selectedData.Title}</h1>
    <p>{selectedData.Year}</p>
    <p>{selectedData.Rated}</p>
    <p>{selectedData.Released}</p>
    <p>{selectedData.Runtime}</p>
    <p>{selectedData.Genre}</p>
    <p>{selectedData.Director}</p>
    <p>{selectedData.Writer}</p>
    <p>{selectedData.Actors}</p>
    <p>{selectedData.Plot}</p>
    <p>{selectedData.Language}</p>
    <p>{selectedData.Country}</p>
    <p>{selectedData.Awards}</p>
    <div>
      {selectedData.Poster && (
        <img src={selectedData.Poster} alt={selectedData.Title} />
      )}
      {!selectedData.Poster && <p>No poster available</p>}
    </div>
  </div>
)}

    {!selectedData && number && (
      <div>
        <p>No title found for the entered number.</p>
      </div>
    )}
  </div>
  );
}
