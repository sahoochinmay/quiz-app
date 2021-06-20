import React, { useState, useEffect, useRef } from "react";
import {useSelector , useDispatch} from "react-redux"
import { nextQuiz, submitQuiz } from "../redux/action/quizAction";
import quizData from "../data/quiz.json";

const Question = ({
  onSetStep,
}) => {
  const dispatch = useDispatch()
  const {activeQuestion,answers} = useSelector(state =>state?.quizReducer)
  console.log(activeQuestion)
  const [data,setData] = useState(quizData?.data[activeQuestion])
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");
  const radiosWrapper = useRef();
  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
    setData(quizData?.data[activeQuestion])
  }, [data,activeQuestion]);
  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  const handleNext = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    dispatch(nextQuiz({
      answers: [...answers,answers[activeQuestion]={
        q: data.question, a: selected
      }]
    }))
    setSelected("");
  };
  const handleSubmit = () =>{
    if (selected === "") {
      return setError("Please select one option!");
    }
    dispatch(submitQuiz({
      answers: [...answers,answers[activeQuestion]={
        q: data.question, a: selected
      }]
    }))
  }
  return (
    <div>
      <div className="card">
        <div>
          <h2>{data?.question}</h2>
          <div
           ref={radiosWrapper}
          >
            {data?.choices.map((choice, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name="answer"
                  value={choice}
                  onChange={changeHandler}
                />
                {choice}
              </label>
            ))}
          </div>
          {error && <div>{error}</div>}
          <button >Prev</button>
          {
            activeQuestion+1 >= quizData?.data.length ?
             <button onClick={handleSubmit}>Submit</button>
            :
            <button onClick={handleNext}>Next</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Question;
