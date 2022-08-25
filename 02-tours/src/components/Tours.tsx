import React, { FunctionComponent } from "react";
import { Tour } from "../types/Tour";
import SingleTour from "./SingleTour";

type Props = {
  tours: Tour[];
};

const Tours: FunctionComponent<Props> = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <SingleTour key={tour.id} tour={tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
