import React from 'react';

const profileAvatar = require('../Images/profile-avatar.jpg');

export const About = () => (
  <section className="p-4 pt-7 about row">
    <section className="col-xs-12 col-md-7">
      <section className="p-4 about">
        <section className="about-content">
          <h1 className="pb-5">About me</h1>
          <p>
            Javascript developer with experience as a front-end lead. I am
            passionate about writing good code and continue to explore new
            standards, features, and technology to improve the way I work.
          </p>
          <p>
            I absolutely love visiting national parks and plan to visit all 62 of them (right now i have visited about 16).
            Apart from this i am huge European soccer fan, like to try new breweries, eat spicy food, collect fridge magnates,
            like to send postcards and wishes if i was one of{' '}
            <a
              title="Gene identified in people who need little sleep"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.nih.gov/news-events/nih-research-matters/gene-identified-people-who-need-little-sleep"
            >these</a> lucky folks.
          </p>
        </section>
        <section className="about-cards">
          Books I am currently reading:
          <ul>
            <li>
              Soccernomics <i>by Simon Kuper & Stefan Szymanski</i>
            </li>
            <li>
              The Club: How the English Premier League Became the Wildest, Richest,
              Most Disruptive Force in Sports{' '}
              <i>by Joshua Robinson, Jonathan Clegg</i>
            </li>
          </ul>
        </section>
      </section>
    </section>
    <section className="col-xs-12 col-md-5">
      <img id="profile-avatar" src={profileAvatar} alt="Profile Avatar" />
    </section>
  </section>
);
