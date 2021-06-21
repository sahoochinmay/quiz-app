import React from "react";
import { useDispatch} from 'react-redux'
import { startQuiz } from "../redux/action/quizAction";
const Start = () => {
  const dispatch = useDispatch()
  const handleQuizStart = () =>{
    dispatch(startQuiz())
  }
  return (
    <div className="startBox">
      <div >
        <div >
          <h1>Start the Quiz</h1>
          <p>Good luck!</p>
          <button className="startButton" onClick={handleQuizStart}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
