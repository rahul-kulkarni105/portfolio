import React from 'react';
import { Box, Carousel, Image } from 'grommet';

const umassd1 = require('../Images/umassd1.jpeg');
const umassd2 = require('../Images/umassd2.jpeg');
const umassd3 = require('../Images/umassd3.jpeg');
const ytiet1 = require('../Images/ytiet1.jpeg');
const ytiet2 = require('../Images/ytiet2.jpeg');
const ytiet3 = require('../Images/ytiet3.jpeg');

export const Education = () => (
  <section className="p-4 pt-7">
    <h1 className="pb-5">Academic Background</h1>
    <section className="">
      <section className="education-card grow col-12 col-sm-10 offset-md-1 col-md-8 offset-md-2 p-0 mb-5">
        <Box className="" height="small" width="medium" overflow="hidden">
          <Carousel fill controls={false} play={4000}>
            <Image fit="cover" src={umassd1} />
            <Image fit="cover" src={umassd2} />
            <Image fit="cover" src={umassd3} />
          </Carousel>
        </Box>
        <Box className="p-2  pr-4">
          <h3>University of Massachusetts, Dartmouth</h3>
          <h4>Masters in Computer Science, 2014</h4>
          <ul>
            <li>Completed projects in Matlab and C++.</li>
            <li>
              Worked as a webmaster for Umassd.edu and Indian student
              association.
            </li>
          </ul>
        </Box>
      </section>
      <section className="education-card grow col-12 col-sm-10 offset-md-1 col-md-8 offset-md-2 p-0 mt-5">
        <Box className="p-2 pl-4">
          <h3>University of Mumbai</h3>
          <h4>Bachelor of Engineering in Computer Science, 2012</h4>
          <ul>
            <li>Active member of Computer Science society.</li>
            <li>
              Worked on airline booking management and analyzed intrusion
              detection mechanisms.
            </li>
            <li>
              Member of student association for football and online gaming
            </li>
          </ul>
        </Box>
        <Box height="small" width="medium" overflow="hidden">
          <Carousel fill controls={false} play={5000}>
            <Image fit="cover" src={ytiet1} />
            <Image fit="cover" src={ytiet2} />
            <Image fit="cover" src={ytiet3} />
          </Carousel>
        </Box>
      </section>
    </section>
  </section>
);
