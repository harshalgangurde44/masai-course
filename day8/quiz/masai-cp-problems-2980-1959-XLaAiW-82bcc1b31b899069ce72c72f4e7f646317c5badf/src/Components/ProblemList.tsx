import React from "react";
import { ProblemCard } from "./ProblemCard";
import { Quiz } from "../constants";

interface ProblemListProps {
  problems: Quiz[];
  setProblems: React.Dispatch<React.SetStateAction<Quiz[]>>;
}

export const ProblemList: React.FC<ProblemListProps> = ({
  problems,
  setProblems,
}) => {
  return (
    <div data-testid="problem-list">
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          problem={problem}
          setProblems={setProblems}
        />
      ))}
    </div>
  );
};
