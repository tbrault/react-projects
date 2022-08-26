import React, { useState, FunctionComponent } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type Props = {
  title: string;
  info: string;
};

const Question: FunctionComponent<Props> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showInfo && info}</p>
    </article>
  );
};

export default Question;
