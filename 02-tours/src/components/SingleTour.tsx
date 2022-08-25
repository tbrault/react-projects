import React, { useState, FunctionComponent } from "react";
import { Tour } from "../types/Tour";

type Props = {
  id: number;
  name: string;
  image: string;
  info: string;
  price: number;
  removeTour: Function;
};

const SingleTour: FunctionComponent<Props> = ({
  id,
  name,
  info,
  image,
  price,
  removeTour,
}) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default SingleTour;
