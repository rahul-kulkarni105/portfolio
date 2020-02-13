import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Grommet,
  Main,
  Header,
  Footer,
  Text,
  Anchor,
  Box,
  Nav,
} from "grommet";
import { SidebarButton } from './Components/sidebar';

const App = () => {
  return (
    <div className="App">
      <Grommet>
        <Header>
          <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </Header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Main pad="large">
            <Box fill direction="row">
              <Nav background="neutral-1">
                {["Home", "About", "Skills", "Work", "Education", "Contact"].map(label => (
                  <SidebarButton
                    key={label}
                    label={label}
                    // active={label === active}
                    // onClick={() => setActive(label)}
                  />
                ))}
              </Nav>
            </Box>
          </Main>
        <Footer background="brand" pad="medium">
          <Text>Copyright</Text>
          <Anchor label="About" />
        </Footer>
      </Grommet>
    </div>
  );
}

export default App;
