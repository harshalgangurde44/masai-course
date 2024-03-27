import React, { useState } from "react";
import axios from "axios";

export const AddQuiz: React.FC = () => {
  const [problem, setProblem] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [weightage, setWeightage] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/quizes`;
    const data = {
      problem,
      optionA,
      optionB,
      optionC,
      optionD,
      correctOption,
      weightage,
    };
    await axios.post(url, data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="problem-statement"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="question"
      />
      <input
        className="option-a"
        value={optionA}
        onChange={(e) => setOptionA(e.target.value)}
        placeholder="option-a"
      />
      <input
        className="option-b"
        value={optionB}
        onChange={(e) => setOptionB(e.target.value)}
        placeholder="option-b"
      />
      <input
        className="option-c"
        value={optionC}
        onChange={(e) => setOptionC(e.target.value)}
        placeholder="option-c"
      />
      <input
        className="option-d"
        value={optionD}
        onChange={(e) => setOptionD(e.target.value)}
        placeholder="option-c"
      />
      <select
        className="correct-option"
        value={correctOption}
        onChange={(e) => setCorrectOption(e.target.value)}
      >
        <option value="">Select Correct Option</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
      </select>
      <input
        className="weightage"
        type="number"
        value={weightage}
        onChange={(e) => setWeightage(Number(e.target.value))}
      />
      <button className="submit-form" type="submit">
        Submit
      </button>
    </form>
  );
};
