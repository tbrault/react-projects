import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

function Error(): JSX.Element {
  return (
    <section className="section">
      <div className={styles.errorContainer}>
        <h1> oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
}

export default Error;
