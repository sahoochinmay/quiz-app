import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div className="card">
      <div >
        <div >
          <h1>Start the quiz</h1>
          <p>Good luck!</p>
          <button onClick={onQuizStart}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
