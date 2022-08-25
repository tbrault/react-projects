import React, { useState, FunctionComponent } from "react";
import { Tour } from "../types/Tour";

type Props = {
  tour: Tour;
};

const SingleTour: FunctionComponent<Props> = ({ tour }) => {
  const { name, info, image, price } = tour;

  return (
    <div>
      <h2>tour component</h2>
      <p>{name}</p>
      <p>{info}</p>
      <p>{image}</p>
      <p>{price}</p>
    </div>
  );
};

export default SingleTour;
