import React from "react";
import "./Testing.css";
import Logo from "./logo.png";
import { varsityData } from "./KnowledgeHubData";
import { useNavigate } from "react-router-dom";

function Testing() {
  const navigate = useNavigate();

  // Function to handle the search submission
  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here, using `navigate` if needed
  };

  const login = (event) => {
    try {
      console.log("Back to login for now.");
      navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const openModule = () => {
    // Define the logic for opening a module or handle the click event
    console.log("Open module logic");
  };

  console.log(varsityData);

  return (
    <>
      {/* display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 10px; */}
      <div className="flex p-8 bg-white items-center justify-between">
        <div className="navbar-logo">
          <img src={Logo} alt="Your Company" />
        </div>
        <div className="navbar-links">
          <h2 onClick={login}>Home</h2>
          <h2 onClick={login}>Explore</h2>
          <h2 onClick={login}>KnowledgeHub</h2>
          <h2 onClick={login}>News</h2>
          <h2 onClick={login}>Trending</h2>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button type="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="bg-white">
        <div className="heading">
          {/* color: #ffffff;
          font-weight: bolder;
          font-size: 60px;
          padding-top: 50px;
          padding-left: 50px; */}
          <h1 className="text-black text-6xl font-extrabold pt-[50px] pl-[50px]">
            Stock Market Education
          </h1>
        </div>
        {/* Subheading */}
        <div className="pb-[50px]">
          <h1 className="text-black text-4xl font-bold pl-[50px]">
            Play the market to your favor
          </h1>
          {/* subtitle */}
        </div>
        <div className="cards">
          <div className="card-grid">
            {varsityData.map((data, index) => (
              <div
                className="card bg-gray-400"
                onClick={openModule}
                key={index}
              >
                <div className="container">
                  <h2 className='text-right font-bold text-4xl' style={{color:data.color}}>
                    <b>{data.num}</b>
                  </h2>
                  <h4 className="text">
                    <b>{data.title}</b>
                  </h4>
                  <p className="text">{data.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testing;
