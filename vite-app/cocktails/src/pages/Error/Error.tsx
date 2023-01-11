import React from "react";
import Button from "../../components/Button/Button";
import styles from "./Error.module.css";

function Error(): JSX.Element {
  return (
    <section className="section">
      <div className={styles.errorContainer}>
        <h1> oops! it's a dead end</h1>
        <Button
          name="back home"
          path="/"
          buttonStyles={["btn", "btnPrimary"]}
        />
      </div>
    </section>
  );
}

export default Error;
