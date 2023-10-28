import React, { useState } from "react";
import ContentHeader from "./ContentHeader";
import svg from "../assets/Group.svg";
import TimeCounter from "./TimeCounter";
import NotifyForm from "./NotifyForm";
import Card from "./Card";

const Content = ({ setIsTimerOut }) => {
  return (
    <div className="w-full h-screen px-[16px]  md:px-0 md:w-[1027px] md:h-[720px] md:my-[152px] md:mx-[205px]  flex-col justify-center items-center gap-[42px]  md:gap-[72px] inline-flex">
      <ContentHeader />
      <div className="dark:text-stone-300 text-center tracking-widest text-stone-600 text-md md:text-xl font-semibold font-['Poppins'] leading-4">
        GET READY FOR THE REAVEAL !
      </div>
      <TimeCounter setIsTimerOut={setIsTimerOut} />
      <section className="flex-col justify-center items-center gap-6 flex">
        <h3 className="dark:text-stone-300 text-center text-zinc-900 text-xl font-normal font-['Poppins'] leading-normal">
          Be the first to know! Share your email and We'll
          notify you when it's live
        </h3>
        <NotifyForm />
      </section>
    </div>
  );
};

export default Content;
