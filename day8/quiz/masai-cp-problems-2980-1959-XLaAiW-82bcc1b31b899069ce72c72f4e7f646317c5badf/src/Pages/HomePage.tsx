import React from "react";
import { Navbar } from "../Components/Navbar";
import { AddQuiz } from "../Components/AddQuiz";

export const HomePage = () => {
  return (
    <>
      <Navbar pageName="Home Page" />
      <AddQuiz />
    </>
  );
};
