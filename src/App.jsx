import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen.jsx";
import Classroom from "./components/Classroom.jsx";
import FinalMessage from "./components/FinalMessage.jsx";
import "./App.css";

// The whole experience is a tiny state machine with three stages.
// "welcome"   -> opening screen
// "classroom" -> the interactive classroom (the bulk of the experience)
// "final"     -> full-screen closing letter, reached via the class bell
export default function App() {
  const [stage, setStage] = useState("welcome");

  return (
    <div className="app-shell">
      {stage === "welcome" && (
        <WelcomeScreen onEnter={() => setStage("classroom")} />
      )}

      {stage === "classroom" && (
        <Classroom onDismissClass={() => setStage("final")} />
      )}

      {stage === "final" && (
        <FinalMessage onReturn={() => setStage("classroom")} />
      )}
    </div>
  );
}
