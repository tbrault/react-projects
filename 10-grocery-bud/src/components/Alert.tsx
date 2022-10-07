import React, { useEffect } from "react";
import AlertMessage from "../interfaces/AlertMessage";

type Props = {
  alert: AlertMessage;
  removeAlert: Function;
};

const Alert = ({ alert, removeAlert }: Props): JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert({ ...alert, show: false });
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return <p className={`alert-${alert.type}  alert`}>{alert.message}</p>;
};

export default Alert;
