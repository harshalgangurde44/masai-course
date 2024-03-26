import { createRoot } from "react-dom/client";

import App from "./App";
import { initState, reducer } from "./reducers/books/reducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

if (window.Cypress) {
  window.reducerInitialState = initState;
  window.reducer = reducer;
}
