import React, { useEffect } from "react";
import AlertMessage from "../interfaces/AlertMessage";

type Props = {
  alert: AlertMessage;
  setAlert: Function;
};

const Alert = ({ alert, setAlert }: Props): JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <p
      className={`${
        alert.type === "error" ? "alert-danger" : "alert-success"
      }  alert`}
    >
      {alert.message}
    </p>
  );
};

export default Alert;
