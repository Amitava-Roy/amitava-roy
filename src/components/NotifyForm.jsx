import React, { useState } from "react";
import spinner from "../assets/spinner.svg";

const NotifyForm = () => {
  const [email, setEmail] = useState("");
  const [isEmailError, setisEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNotify = () => {
    setIsLoading(true);
    if (
      email.includes("@gmail.com") ||
      email.includes("@yahoo.com")
    ) {
      //this is to simulate api call
      setTimeout(() => {
        //email is valid
        setisEmailError(false);
        //email send to the backend..
        setIsLoading(false);
        setIsSubmitted(true);
        setTimeout(() => {
          // reset input cleaer input field
          setEmail("");
          //reset submission status
          setIsSubmitted(false);
        }, 500);
      }, 1000);
    } else {
      //this is to simulate api call
      setTimeout(() => {
        setIsLoading(false);
        setisEmailError(true);
        setEmail("");
      }, 1000);
      return;
    }
  };
  return (
    <div className="inline-flex flex-col gap-3">
      <div className="justify-center items-center gap-3.5 flex-col md:flex-row inline-flex">
        <input
          className="dark:focus:ring-2 dark:text-slate-300 dark:focus:ring-slate-100 focus:border-collapse dark:bg-zinc-500 dark:placeholder:text-stone-300 w-[304px] h-[16px] md:w-[600px] md:h-[58px] px-5 py-4 rounded-lg border-[1.5px] border-neutral-600 "
          placeholder="Please enter your email id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          className="dark:bg-slate-50 dark:text-stone-950 inline-flex justify-center items-center w-[304px]  px-5 py-2 bg-stone-950 rounded-lg text-white text-opacity-50 text-[18px] md:text-[24px] font-medium font-['Poppins'] leading-loose"
          onClick={handleNotify}
        >
          {isLoading ? (
            <img className="animate-spin" src={spinner} />
          ) : isSubmitted ? (
            "✔"
          ) : (
            "Notify Me"
          )}
        </button>
      </div>
      {isEmailError && (
        <p className="text-red-600 text-lg font-bold tracking-wide">
          Entered email is wrong
        </p>
      )}
    </div>
  );
};

export default NotifyForm;
