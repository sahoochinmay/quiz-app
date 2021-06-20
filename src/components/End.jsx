import React, { useEffect, useState } from "react";
import { formatTime } from '../utils';

const End = ({results,data,time,onAnswersCheck,onReset}) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);

  return (
    <div className="card">
        <div>
          <h3>Your results</h3>
          <p>
            {correctAnswers} of {data.length}
          </p>
          <p>
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
          <p>
            <strong>Your time:</strong> {formatTime(time)}
          </p>
          <button  onClick={onAnswersCheck}>
            Check your answers
          </button>
          <button  onClick={onReset}>
            Try again
          </button>
        </div>
    </div>
  );
};

export default End;
