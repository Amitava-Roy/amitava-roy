import React, { useEffect, useState } from "react";

const useTimer = (time = 10) => {
  const minute = Math.trunc(time / 60);

  let second;
  if (time > 59) {
    second = time % 60;
  } else {
    second = time;
  }
  const [min, setMin] = useState(minute);
  const [sec, setSec] = useState(second);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (sec > 0) {
        setSec((prev) => prev - 1);
      }
      if (sec === 0) {
        if (min === 0) {
          setIsFinished(true);
          clearInterval(timer);
        } else {
          setMin((prev) => prev - 1);
          setSec(59);
        }
      }
    }, [1000]);
    return () => clearInterval(timer);
  }, [sec, min]);
  return [sec, min, isFinished];
};

export default useTimer;
