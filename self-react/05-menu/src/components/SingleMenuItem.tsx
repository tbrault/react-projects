import React, { FunctionComponent } from "react";

type Props = {
  title: string;
  price: number;
  desc: string;
  img: string;
};

const SingleMenuItem: FunctionComponent<Props> = ({
  title,
  price,
  desc,
  img,
}) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${Math.round(price)}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default SingleMenuItem;
