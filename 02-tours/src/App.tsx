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

  const getTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setIsLoading(false);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

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
      <Tours tours={tours} />
    </main>
  );
};

export default App;
