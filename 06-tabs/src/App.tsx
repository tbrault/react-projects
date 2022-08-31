import React, { useState, useEffect, FunctionComponent } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

const App: FunctionComponent = () => {
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <article className="jobs-center">
          <aside className="btn-container">
            <button className="job-btn active-btn">tommy</button>
            <button className="job-btn">bigdrop</button>
            <button className="job-btn">cuker</button>
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
