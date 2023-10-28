import React from "react";
import useTimer from "./hooks/useTimer";
const COUNTER_VALUE_IN_SECONDS = 61;
const TimeCounter = ({ setIsTimerOut }) => {
  const [sec, min, isFinished] = useTimer(
    COUNTER_VALUE_IN_SECONDS
  );
  if (isFinished) {
    //timer ended
    setIsTimerOut(true);
  }
  const padMin = min.toString().padStart(2, "0");
  const padSec = sec.toString().padStart(2, "0");

  console.log(min, sec);
  return (
    <section className="bg-zinc-500 p-5 md:p-8 bg-gradient-to-r from-[#E5B8D9] to-[#C9B8E5] rounded-3xl justify-center items-center gap-5 md:gap-16 inline-flex dark:bg-gradient-to-r dark:from-pink-950 dark:via-fuchsia-950 dark:to-indigo-950">
      <div className="p-2 flex-col justify-center items-center gap-4 inline-flex">
        <h2 className="dark:text-stone-100 text-stone-950 text-4xl md:text-[64px] font-medium font-['Poppins'] leading-[64px]">
          {padMin}
        </h2>
        <h3 className="dark:text-stone-300 text-[#333333] text-sm md:text-2xl font-normal font-['Poppins'] leading-normal">
          Minutes
        </h3>
      </div>
      <div className="dark:text-zinc-400 w-3 text-[#333333] md:text-[64px] font-normal font-['Poppins'] leading-[64px]">
        :
      </div>
      <div className="p-2 flex-col justify-center items-center gap-4 inline-flex">
        <h2 className="dark:text-stone-100 text-stone-950 text-4xl md:text-[64px] font-medium font-['Poppins'] leading-[64px]">
          {padSec}
        </h2>
        <h3 className="dark:text-stone-300 text-zinc-800 text-sm md:text-2xl font-normal font-['Poppins'] leading-normal">
          Seconds
        </h3>
      </div>
    </section>
  );
};

export default TimeCounter;
