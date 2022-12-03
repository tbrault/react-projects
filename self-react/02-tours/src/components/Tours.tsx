import React, { FunctionComponent } from "react";
import { Tour } from "../types/Tour";
import SingleTour from "./SingleTour";

type Props = {
  tours: Tour[];
  removeTour: Function;
};

const Tours: FunctionComponent<Props> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <SingleTour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
