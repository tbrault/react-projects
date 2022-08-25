import React, { useState, useEffect, FunctionComponent } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import { Tour } from "./types/Tour";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

const App: FunctionComponent = () => {
  const [tours, setTours] = useState<Tour[]>([]);

  return <h2>Tours Project Setup</h2>;
};

export default App;
