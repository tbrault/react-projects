import React, { useState, useEffect, FunctionComponent } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import { Tour } from "./types/Tour";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

const App: FunctionComponent = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn">refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours />
    </main>
  );
};

export default App;
