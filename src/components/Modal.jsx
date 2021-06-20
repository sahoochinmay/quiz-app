import React from "react";

const Modal = ({results ,data , onClose}) => {
  return (
    <div className="modal is-active">   
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your answers</p>
          <button className="delete" onClick={onClose}>Close</button>
        </header>
        <section className="modal-card-body content">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p>
                  <strong>{result.q}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].answer
                      ? "bg-success"
                      : "bg-danger"
                  }
                >
                  Your answer: {result.a}
                </p>
                {result.a !== data[i].answer && (
                  <p className="bg-success">
                    Correct answer: {data[i].answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Modal;
