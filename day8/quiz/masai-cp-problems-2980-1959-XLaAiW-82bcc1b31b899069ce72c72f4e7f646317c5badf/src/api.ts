import axios, { AxiosResponse } from "axios";
import { Quiz } from "./constants";

const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/quizes`;

export const postQuiz = async (quiz: Quiz): Promise<Quiz> => {
  try {
    const response: AxiosResponse<Quiz> = await axios.post(url, quiz, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting quiz:", error);
    throw error;
  }
};

export const getQuiz = async (): Promise<Quiz[]> => {
  try {
    const response: AxiosResponse<Quiz[]> = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    throw error;
  }
};

export const editWeightage = async (
  quizId: number,
  updatedWeightage: number
): Promise<Quiz> => {
  const quizUrl = `${url}/${quizId}`;
  try {
    const response: AxiosResponse<Quiz> = await axios.patch(
      quizUrl,
      { weightage: updatedWeightage },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating weightage:", error);
    throw error;
  }
};
