import React, { useState } from "react";
import Title from "../components/Title";
import Content from "../components/Content";
import BlobPink from "../components/ui/BlobPink";
import BlobViolet from "../components/ui/BlobViolet";
import Card from "../components/Card";

const Home = () => {
  const [isTimerOut, setIsTimerOut] = useState(false);

  return (
    <div className="relative overflow-hidden dark:bg-zinc-700">
      <BlobPink />
      <BlobViolet />
      <Title />
      {!isTimerOut && (
        <Content setIsTimerOut={setIsTimerOut} />
      )}
      {isTimerOut && <Card />}
    </div>
  );
};

export default Home;
