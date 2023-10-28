import React from "react";

const copy = () => {
  return (
    <div className="w-[1027px] h-[720px] py-6 flex-col justify-center items-center gap-[72px] inline-flex">
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className="justify-center items-center gap-2 inline-flex">
          <div className="w-16 h-16 justify-center items-center flex">
            <div className="origin-top-left rotate-[30deg] w-12 h-[65.87px] relative"></div>
          </div>
          <div className="text-center text-stone-950 text-[64px] font-semibold font-['Poppins'] leading-[64px]">
            Launching New Module Soon!
          </div>
        </div>
        <div className="w-[959px] text-center">
          <span className="text-zinc-800 text-2xl font-normal font-['Poppins'] leading-[28.80px]">
            Exciting things are in the works! We're
            currently{" "}
          </span>
          <span className="text-stone-950 text-2xl font-medium font-['Poppins'] leading-[28.80px]">
            Crafting a new feature
          </span>
          <span className="text-zinc-800 text-2xl font-normal font-['Poppins'] leading-[28.80px]">
            {" "}
            for you. Keep an eye out for updates – We're
            working to make it available soon!
          </span>
        </div>
      </div>
      <div className="w-[631px] h-[26px] relative">
        <div className="w-[630.44px] h-[25.81px] left-0 top-0 absolute" />
      </div>
      <div className="p-8 bg-gradient-to-r from-pink-300 to-violet-300 rounded-3xl justify-center items-center gap-16 inline-flex">
        <div className="p-2 flex-col justify-center items-center gap-4 inline-flex">
          <div className="text-stone-950 text-[64px] font-medium font-['Poppins'] leading-[64px]">
            00
          </div>
          <div className="text-zinc-800 text-2xl font-normal font-['Poppins'] leading-normal">
            Minutes
          </div>
        </div>
        <div className="w-3 origin-top-left rotate-180 text-zinc-800 text-[64px] font-normal font-['Poppins'] leading-[64px]">
          :
        </div>
        <div className="p-2 flex-col justify-center items-center gap-4 inline-flex">
          <div className="text-stone-950 text-[64px] font-medium font-['Poppins'] leading-[64px]">
            03
          </div>
          <div className="text-zinc-800 text-2xl font-normal font-['Poppins'] leading-normal">
            Seconds
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-6 flex">
        <div className="text-center text-zinc-900 text-xl font-normal font-['Poppins'] leading-normal">
          Be the first to know! Share your email and We'll
          notify you when it's live
        </div>
        <div className="justify-center items-center gap-3.5 inline-flex">
          <div className="w-[600px] h-[52px] px-5 py-4 rounded-lg border border-neutral-600 justify-start items-center flex">
            <div className="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Poppins'] leading-tight">
              Please enter your email id
            </div>
          </div>
          <div className="px-5 py-2 bg-stone-950 rounded-lg justify-center items-center flex">
            <div className="text-white text-opacity-50 text-[32px] font-medium font-['Poppins'] leading-loose">
              Notify Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default copy;
