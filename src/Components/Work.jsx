import React from "react";
import { Accordion, AccordionPanel, Box } from "grommet";

export const Work = () => (
  <section className="p-4 pt-7">
    <h1 className="pb-5">Experience</h1>
    <Box>
      <Accordion>
        <AccordionPanel
          className="p-3"
          label="Synchrony Financial (Capgemini), Jan-2021 to Present"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Senior Consultant, Austin, TX (Remote)</h4>
            <ul>
              <li>
                Team lead for agile scrum team developing a consumer-facing web
                application used in e-commerce payments. Focus on the complete
                software development lifecycle for cloud-based web applications
                within the React ecosystem.
              </li>
              <li>
                Leads efforts on enterprise-focused feature releases & system
                design, extending the current application scope, and maintaining
                the current working state.
              </li>
              <li>
                Guides software developers through mentoring, feedback, story
                estimation and prioritized work tasks, and all aspects of
                application development to ensure quality standards.
              </li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="Wells Fargo (Capgemini), Apr-2020 to Dec-2020"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Senior Consultant, Charlotte, NC (Remote)</h4>
            <ul>
              <li>
                Develop and maintain micro-sites and supporting repositories in
                Vue ecosystem.
              </li>
              <li>
                Code review, govern coding standards, create new design and
                component patterns.
              </li>
              <li>Maintain enterprise wide front end boilerplate for Vue.</li>
              <li>Groom features for team, Pair programming on daily basis.</li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="AIG (Capgemini), Oct-2019 to Mar-2020"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Senior Consultant, Houston, TX</h4>
            <ul>
              <li>
                Developed and maintained micro-sites and supporting repositories
                in react, redux.
              </li>
              <li>
                Performed Code review, govern coding standards, maintain
                branching strategies.
              </li>
              <li>Supported bi-weekly prod and non-prod deployments.</li>
              <li>Groomed features for team, and coordinate with offshore.</li>
              <li>
                Collaborated with other teams inside the company and third
                parties.
              </li>
              <li>
                Participated in Hackathons and Proof of Concept creations.
              </li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="AIG (Anagh Tech), Aug-2017 to Oct-2019"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Senior Consultant, Houston, TX</h4>
            <ul>
              <li>
                Develop and maintain micro-sites and supporting repositories in
                react, redux.
              </li>
              <li>
                Code review, govern coding standards, maintain branching
                strategies.
              </li>
              <li>Support bi-weekly prod and non-prod deployments.</li>
              <li>Groom features for team, and coordinate with offshore.</li>
              <li>
                Collaborations with other teams inside the company and third
                parties.
              </li>
              <li>Participate in Hackathons and Proof of Concept creations.</li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="HPE/DXC Technology (Anagh Tech), Nov-2016 to July 2017"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Web Developer, Austin, TX</h4>
            <ul>
              <li>Worked on intranet sites using React-Redux and Grommet.</li>
              <li>
                Played integral role on close knit team in showcasing agile
                capabilities to larger teams.
              </li>
              <li>Implemented React/Unit testing coding standards.</li>
              <li>
                Implemented Redux mock store, Webpack, Axios for api
                connections,
              </li>
              <li>Collaborated with Dev-Ops for deployments.</li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="Code & Theory (Anagh Tech), June-2016 to Sep 2016"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Web Developer, New York City, NY</h4>
            <ul>
              <li>
                Developed websites such as, New york life, Heritage.org and
                Consumer.com.
              </li>
              <li>
                Created and delivered HTML/Sass prototypes for high-pressure
                deadlines.
              </li>
              <li>Used Jquery for nylife, introduced to React and Es6</li>
              <li>
                Experience with setting up Storybook, js animations libraries
                like Greensock.
              </li>
              <li>Collaborated closely with design team for development.</li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="Utis Technologies, Jun-2015 to May 2016"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Software Developer, Piscataway, NJ</h4>
            <ul>
              <li>Developed internal websites using AngularJs.</li>
              <li>Developed HTML5/Sass based documentation dashboard.</li>
              <li>
                Worked on various form implementations using JavaScript and
                Angular.
              </li>
            </ul>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  </section>
);
