import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { ProblemList } from "../Components/ProblemList";
import { getQuiz } from "../api";
import { Quiz } from "../constants";

export const AllProblems = () => {
  const [problems, setProblems] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuiz();
      setProblems(data); // Fixed the property access here
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar pageName="All Problems" />
      <ProblemList problems={problems} setProblems={setProblems} />
    </>
  );
};
