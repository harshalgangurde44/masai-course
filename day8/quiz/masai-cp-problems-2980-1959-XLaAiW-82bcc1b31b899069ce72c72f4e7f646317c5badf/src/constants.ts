// export type Quiz = {
//   [x: string]: string | null | undefined;
// };

import { ReactNode } from "react";

export interface Quiz {
  optionA: ReactNode;
  optionB: ReactNode;
  optionC: ReactNode;
  optionD: ReactNode;
  correctOption: ReactNode;
  problem: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;
  weightage: number; // Change the type to number
  id: number;
}
