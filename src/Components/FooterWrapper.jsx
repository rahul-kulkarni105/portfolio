import { Footer, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { GitHubSvg } from './Logos/GitHubSvg';
import { LinkedinSvg } from './Logos/LinkedinSvg';

export const FooterWrapper = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const fetchLastUpdated = async () => {
      const response = await fetch(
        'https://api.github.com/repos/rahul-kulkarni105/portfolio/releases/latest'
      );

      const body = await response.json();
      const date = new Date(body.published_at);
      const formattedDate = new Intl.DateTimeFormat('en-US').format(date);
      setLastUpdated(formattedDate);
    }

    fetchLastUpdated();
  }, []);

  return (
    <Footer className="footer" background="#000" pad="medium">
    <section>
      <Text className="p-2 footer__text">Last updated: {lastUpdated}</Text>
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
};
