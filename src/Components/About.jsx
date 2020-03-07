import React from 'react';

export const About = () => (
  <section className="p-4 pt-7 about row">
    <section className="about-content col-sm-5">
      <h1 className="pb-5">About me</h1>
      <p>Javascript developer with experience as a front-end lead. I am passionate about writing good code and continue to explore new standards, features, and technology to improve the way I work.</p>
    </section>
    <section className="about-cards col-sm-7"></section>
    <section className="about-cards col">
      Books I am currently reading:
      <ul>
        <li>Soccernomics <i>by Simon Kuper & Stefan Szymanski</i></li>
        <li>The Club: How the English Premier League Became the Wildest, Richest, Most Disruptive Force in Sports <i>by Joshua Robinson, Jonathan Clegg</i></li>
      </ul>
    </section>
  </section>
);