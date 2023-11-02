import { useState } from "react";
import "./App.css";
import { GoodChildren } from "./components/GoodChildren";

function App() {
  const [state, setState] = useState("");

  const handleClick = () => {
    setState("Hello");
  };

  return (
    <div className="App">
      <GoodChildren>
        <div>{state}</div>
        <button type="submit" onClick={handleClick}>
          Change Parent State
        </button>
      </GoodChildren>
    </div>
  );
}

export default App;
