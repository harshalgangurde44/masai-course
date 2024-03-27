import React from "react";
import axios from "axios";
import { Quiz } from "../constants";

interface ProblemCardProps {
  problem: Quiz;
  setProblems: React.Dispatch<React.SetStateAction<Quiz[]>>;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({
  problem,
  setProblems,
}) => {
  const increaseWeightage = async () => {
    const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/quizes/${problem.id}`;
    const updatedProblem: Quiz = {
      ...problem,
      weightage: Number(problem.weightage ?? 0) + 1,
    };
    await axios.patch(url, updatedProblem);
    setProblems((prevProblems) =>
      prevProblems.map((p) => (p.id === problem.id ? updatedProblem : p))
    );
  };

  const decreaseWeightage = async () => {
    const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/quizes/${problem.id}`;
    const updatedProblem: Quiz = {
      ...problem,
      weightage: Number(problem.weightage ?? 0) - 1,
    };
    await axios.patch(url, updatedProblem);
    setProblems((prevProblems) =>
      prevProblems.map((p) => (p.id === problem.id ? updatedProblem : p))
    );
  };

  return (
    <div>
      <p className="problem-statement">Problem: {problem.problem}</p>
      <p className="option-a">A: {problem.optionA}</p>
      <p className="option-b">B: {problem.optionB}</p>
      <p className="option-c">C: {problem.optionC}</p>
      <p className="option-d">D: {problem.optionD}</p>
      <p className="correct-option">Correct Option: {problem.correctOption}</p>
      <p className="marks">weightage:{problem.weightage}</p>
      <button data-testid="increase-weightage" onClick={increaseWeightage}>
        +
      </button>
      <button data-testid="decrease-weightage" onClick={decreaseWeightage}>
        -
      </button>
    </div>
  );
};
