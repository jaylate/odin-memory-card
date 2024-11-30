import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import App from "./App.jsx";
import { fetchDogs } from "./utils/fetchAnimals.js";

const dogAPIKey = import.meta.env.VITE_DOGS_API_KEY;
let animals = await fetchDogs(10, dogAPIKey);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App fetchedAnimals={animals} />
  </StrictMode>,
);
