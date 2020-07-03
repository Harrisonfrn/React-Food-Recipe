import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "324ed399";
  const API_KEY = "c8b94839f15dc98f2e2fdbf2ca647376";

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="searchForm">
        <input className="searchBar" type="text" />
        <button className="searchButton" type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default App;
