"use client";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const FaqComponent: React.FC<Props> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleIconClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className=" text-white border-b border-white border-b-1 lg:mx-52">
      <div className="flex  justify-between p-4">
        <p className="lg:text-xl text-bold">{question}</p>
        <span className="text-2xl " onClick={handleIconClick}>
          {showAnswer ? "-" : "+"}
        </span>
      </div>
      {showAnswer && <p className="p-2">{answer}</p>}
    </div>
  );
};

export default FaqComponent;
