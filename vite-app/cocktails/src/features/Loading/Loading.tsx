import React from "react";
import styles from "./Loading.module.css";

function Loading(): JSX.Element {
  console.log("loading");

  return <div className={styles.loader}></div>;
}

export default Loading;
