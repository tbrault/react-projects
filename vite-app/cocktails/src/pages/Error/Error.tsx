import React from "react";
import Button from "../../components/Button/Button";
import styles from "./Error.module.css";

function Error(): JSX.Element {
  return (
    <section className="section">
      <div className={styles.errorContainer}>
        <h1> oops! it's a dead end</h1>
        <Button path="/" buttonStyles={["btn", "btnPrimary"]}>
          back home
        </Button>
      </div>
    </section>
  );
}

export default Error;
