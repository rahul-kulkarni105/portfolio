import React from 'react';
import { Footer, Text } from 'grommet';
import { GitHubSvg } from './Logos/GitHubSvg';
import { LinkedinSvg } from './Logos/LinkedinSvg';

export const FooterWrapper = () => (
  <Footer className="footer" background="#000" pad="medium">
    <section>
      <Text className="p-2 footer__text">Last updated: 06-28-2020</Text>
    </section>
    <section>
      <GitHubSvg
        link="https://github.com/rahul-kulkarni105"
        customIconClass="ml-2 mr-2"
      />
      <LinkedinSvg
        link="https://www.linkedin.com/in/rahul-kulkarni105/"
        customIconClass="ml-2 mr-2"
      />
    </section>
  </Footer>
);
