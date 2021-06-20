import React, { useState, useEffect } from "react";
import "./App.css";
import {useSelector, useDispatch} from 'react-redux'

import End from "./components/End";
import Modal from "./components/Modal";
import Question from "./components/Question";
import Start from "./components/Start";
import quizData from "./data/quiz.json";
import { startQuiz } from "./redux/action/quizAction";


let interval;

const App = () => {
  const dispatch = useDispatch()
  const {step,answers} = useSelector(state => state?.quizReducer) 
  console.log(step);
  console.log(answers);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);
  const handleQuizStart = () => {
    dispatch(startQuiz())
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };
  const resetClickHandler = () => {
    // TODO:
    // setActiveQuestion(0);
    // setAnswers([]);
    // setStep(1);
    setTime(0);
    setShowModal(false)
  }
  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={handleQuizStart} />}
      {step === 2 && (
        <Question
          numberOfQuestions={quizData.data.length}
          // TODO:
          // onSetStep={setStep}
        />
      )}
      {step === 3 && <End 
      results={answers}
      data={quizData.data}
      time={time}
      onReset={resetClickHandler}
      onAnswersCheck={() => setShowModal(true)}
      />}
      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>
  );
};

export default App;
