import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEfect } from "react";

function App() {
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:8080/api/avatar/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
    const avatar = await data;

    console.log("all data", avatar);
  };
  return (
    <div className="App">
      <h1>hello world !!</h1>
      <button onClick={fetchData}>click</button>
    </div>
  );
}

export default App;
