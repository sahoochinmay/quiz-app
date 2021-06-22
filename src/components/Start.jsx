import React from "react";
import { useDispatch , useSelector} from 'react-redux'
import { startQuiz } from "../redux/action/quizAction";
const Start = () => {
  const dispatch = useDispatch()
  const {time} = useSelector(state => state.quizReducer)
  const handleQuizStart = () =>{
    dispatch(startQuiz())
  }
  return (
    <div className="startBox">
      <div >
        <div >
          <h1>Start the Quiz</h1>
          <p>Good luck!</p>
          <p>Time:&nbsp;&nbsp;{time}sec</p>
          <button className="startButton" onClick={handleQuizStart}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
