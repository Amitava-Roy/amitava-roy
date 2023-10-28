import React, { useEffect } from "react";
import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => {
      console.log("started");
      navigate("/question");
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <>
      <ReactConfetti />
      <div className="dark:bg-gradient-to-r dark:from-pink-950 dark:via-fuchsia-950 dark:to-indigo-950 px-3 py-6 md:p-16 mt-[200px] mb-[500px] mx-[16px]  md:my-[150px] md:mx-[200px] bg-gradient-to-r from-pink-300 to-violet-300 rounded-3xl flex-col justify-center items-center md:gap-[72px] inline-flex animate-card-animation">
        <div className="flex-col justify-start items-center gap-6 flex">
          <div className="justify-center items-center gap-2 inline-flex">
            <div className="dark:text-stone-100 text-center text-stone-950 text-2xl md:text-[64px] font-semibold font-['Poppins'] leading-normal md:leading-[64px]">
              We are Live Now!
            </div>
          </div>
          <div className="text-center leading-[10px] mb-[48px]">
            <span className="dark:text-stone-300 text-zinc-800 md:text-2xl font-normal font-['Poppins'] leading-[28.80px]">
              Our new feature is now{" "}
            </span>
            <span className="dark:text-stone-50 text-stone-950 md:text-2xl font-medium font-['Poppins'] leading-[28.80px]">
              Live and ready
            </span>
            <span className="dark:text-stone-300 text-zinc-800 md:text-2xl font-normal font-['Poppins'] leading-[28.80px]">
              {" "}
              for you to explore. Go ahead and give it a try
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/question");
          }}
          className="dark:text-slate-950 dark:bg-stone-50 text-white text-lg  md:text-[24px] font-medium font-['Poppins'] leading-loose px-5 py-2.5 bg-stone-950 rounded-lg "
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Card;
