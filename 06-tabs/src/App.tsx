import React, { useState, useEffect, FunctionComponent } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

type Job = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

const App: FunctionComponent = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [value, setValue] = useState<number>(0);

  const fecthJobs = async () => {
    try {
      const res = await fetch(url);
      const jobs = await res.json();
      setJobs(jobs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthJobs();
  }, []);

  if (loading)
    return (
      <main>
        <section className="section">
          <h1 className="loading">Loading...</h1>
        </section>
      </main>
    );

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <article className="jobs-center">
          <aside className="btn-container">
            {jobs.map(({ id, company }, index) => {
              return (
                <button
                  onClick={() => setValue(index)}
                  key={id}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {company}
                </button>
              );
            })}
          </aside>
          <div className="job-info">
            <h3>test</h3>
            <h4>test</h4>
            <p className="job-date">date</p>
            <div className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, eligendi omnis odio maiores ipsum porro ea vel repellat
                nulla non. Molestiae ullam quaerat autem! Quaerat harum corporis
                accusantium perferendis fugiat?
              </p>
            </div>
            <div className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, eligendi omnis odio maiores ipsum porro ea vel repellat
                nulla non. Molestiae ullam quaerat autem! Quaerat harum corporis
                accusantium perferendis fugiat?
              </p>
            </div>
          </div>
        </article>
        <button className="btn">more info</button>
      </section>
    </main>
  );
};

export default App;
