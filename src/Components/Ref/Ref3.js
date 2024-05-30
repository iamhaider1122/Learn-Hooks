import { useRef, useState } from 'react'

export default function Ref3() {

  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    console.log(Date.now(), "i am data")
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
    console.log(now, startTime, secondsPassed, 'i am time')
  }

  const reset = () => {
    setNow(null)
    setStartTime(null)
    secondsPassed = 0.000

    console.log(secondsPassed)
  }
  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );

}
// You can read or write refs from event handlers or effects instead.