import React from "react";

const Title = ({ question }) => {
  return (
    <div
      className={` md:mt-[24px] md:ml-[24px] px-[20px] py-[10px] md:absolute md:px-[23px] md:py-[26.65px] justify-center items-center gap-[7.69px] inline-flex `}
    >
      <div className="dark:text-stone-100 text-center text-black text-xs md:text-2xl font-semibold font-['Montserrat'] leading-[15.14px] tracking-widest">
        THE
      </div>
      <div className="dark:bg-slate-50 px-[3.59px] py-[6.66px] bg-black justify-center items-center gap-[5.12px] flex">
        <div className="dark:text-stone-950 text-center text-white text-xs md:text-2xl font-semibold font-['Montserrat'] leading-[15.14px] tracking-widest">
          PRODUCT
        </div>
      </div>
      <div className="dark:text-stone-100 text-center text-black text-xs md:text-2xl font-semibold font-['Montserrat'] leading-[15.14px] tracking-widest">
        PLATFORM
      </div>
    </div>
  );
};

export default Title;
