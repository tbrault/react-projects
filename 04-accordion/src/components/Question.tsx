import React, { useState, FunctionComponent } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type Props = {
  title: string;
  info: string;
};

const Question: FunctionComponent<Props> = ({ title, info }) => {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn">
          <AiOutlineMinus />
        </button>
      </header>
      <p>{info}</p>
    </article>
  );
};

export default Question;
