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

  const { title, company, duties, dates } = jobs[value];

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
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
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
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
        </article>
        <button className="btn">more info</button>
      </section>
    </main>
  );
};

export default App;
