import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import '@fontsource/kodchasan';
import "./style/index.css";
import "./style/main.css";

const root: HTMLDivElement = document.querySelector("#root")!;
createRoot(root).render(<App />);
