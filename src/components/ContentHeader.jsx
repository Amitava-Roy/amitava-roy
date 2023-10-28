import React, { useEffect, useState } from "react";
import svg from "../assets/Group.svg";
import rocket from "../assets/Rocket.svg";
const ContentHeader = () => {
  //detecting if we are in dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  return (
    <section className="flex-col justify-start items-center gap-6 flex">
      <div className="justify-center items-center gap-2 flex relative">
        <div className="w-6 origin-top-left rotate-[30deg]  h-6 md:w-12 md:h-12 justify-center items-center bottom-[4px] right-[5.5rem] absolute md:relative md:flex flex-shrink md:mr-[-65px] animate-rocket-animation">
          {/* <div className="origin-top-left rotate-[30deg] w-[20px] h-[28px]  md:w-12 md:h-[60px] "> */}
          {isDarkMode && <img src={rocket} />}
          {!isDarkMode && <img src={svg} />}
          {/* </div> */}
        </div>
        <div className="dark:text-stone-100 text-center text-stone-950 text-2xl md:text-[64px] font-semibold font-['Poppins'] leading-7 md:leading-[64px]">
          Launching New Module Soon!
        </div>
      </div>
      <div className=" md:w-[959px] text-center">
        <span className="dark:text-stone-300 text-[#333333] md:text-2xl font-normal font-['Poppins'] leading-[28.80px]">
          Exciting things are in the works! We're currently{" "}
        </span>
        <span className="dark:text-white text-[#0F0F0F] md:text-2xl font-medium font-['Poppins'] leading-[28.80px]">
          Crafting a new feature
        </span>
        <span className="dark:text-stone-300 text-[#333333] md:text-2xl font-normal font-['Poppins'] leading-[28.80px]">
          {" "}
          for you. Keep an eye out for updates – We're
          working to make it available soon!
        </span>
      </div>
    </section>
  );
};

export default ContentHeader;
