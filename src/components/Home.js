import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/add-Note')
  }

  return (
    <div className="m-3">
      <p className="lead ">
        You might forget the daily tasks of your life, 
        Due to the busy schedules you carry.
        Its better to make a note of it here ...
      </p>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Add Note
      </button>
    </div>
  );
};

export default Home;
