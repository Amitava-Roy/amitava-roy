import React from "react";
import Title from "../components/Title";

const QuestionPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-950">
      <div className="flex flex-row justify-between items-center py-4 px-6  ">
        <div>
          <div
            className={` px-[20px] py-[10px]  md:px-[16px] md:py-[16px] justify-center items-center gap-[7.69px] inline-flex `}
          >
            <div className="text-center text-white text-xs md:text-2xl font-semibold font-['Montserrat'] leading-[15.14px] tracking-widest">
              THE
            </div>
            <div className="px-[3.59px] py-[6.66px] bg-white justify-center items-center gap-[5.12px] flex">
              <div className="text-center text-black text-xs md:text-2xl font-semibold font-['Montserrat'] leading-[15.14px] tracking-widest">
                PRODUCT
              </div>
            </div>
            <div className="text-center text-white text-xs md:text-2xl font-semibold font-['Montserrat'] leading-[15.14px] tracking-widest">
              PLATFORM
            </div>
          </div>
        </div>
        <div className="h-[52px] w-[52px] bg-slate-500 rounded-full">
          {" "}
        </div>
        <div className="flex justify-center items-center text-4xl absolute bottom-9 right-9 w-20 h-20 rounded-full bg-slate-500 text-white filter rotate-90   ">
          &larr;
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
