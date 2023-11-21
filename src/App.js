import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
      return () => clearInterval(intervalId);
    }
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };
  return (
    <div className="App">
      <p>
        {hours}:{minutes}:{seconds}
      </p>
      <button onClick={startAndStop}>{isRunning ? "stop" : "start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
