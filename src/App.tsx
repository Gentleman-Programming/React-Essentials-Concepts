import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { Children } from "./components";

function App() {
  const [state, setState] = useState("");

  const [numberState] = useState(0);

  const handleCallBack = useCallback(() => {
    setState("Hello");
  }, [setState]);

  const handleHeavyAlgorithm = useMemo(() => {
    function calculateFactorial(n: number): number {
      if (n === 0) {
        return 1;
      } else {
        return n * calculateFactorial(n - 1);
      }
    }
    return calculateFactorial(numberState);
  }, [numberState]);

  return (
    <div className="App">
      <Children parentState={state} setParentState={handleCallBack} />
      Heavy Algorithm
      {handleHeavyAlgorithm}
    </div>
  );
}

export default App;
