import { useState } from "react";
import Timer from "./components/Timer/Timer";
import './styles/global.scss';
import { useEffect } from "react";


const App = () => {

  const [time, setTime] = useState(0);

  

  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let timeGo; //zmienna która przechowuje wartośći setInterval z hooka useEffect() w zależności od stanu isRunning (czyli czy stoper jest uruchomiony czy nie)

    if (intervalId) {
      timeGo = setInterval(() => setTime((prevValue) => prevValue + 10), 10); //Za pomocą hooka useEffect() definiowana jest funkcja, która co 10ms zwiększa wartość stanu time o 10
    }
    return () => clearInterval(timeGo); //Za pomocą hooka useEffect() definiowana jest funkcja, która po zatrzymaniu stopera czyści setInterval
  }, [intervalId]);
  

  const startTimer = () => {
    
      setIntervalId(true)
      
    };
  
  const stopTimer = () => {
    
    setIntervalId(null);
  }

  const resetTime =()=> {
    setTime(0);
  }

  return (
    <div className='container'>
       <Timer  time ={time} />
       <div className='buttons'>
        <button className='button'onClick={startTimer}>Start</button>
        <button className='button'onClick={stopTimer}>Stop</button>
        <button className='button'onClick={resetTime}>Reset</button>
      </div>
    </div>
    
  );
}

export default App;
