import React from 'react';
import { SkillBox } from './SkillBox';
import { JavascriptSvg } from './Logos/JavascriptSvg';
import { ReactSvg } from './Logos/ReactSvg';
import { ReduxSvg } from './Logos/ReduxSvg';
import { WebpackSvg } from './Logos/WebpackSvg';
import { NodeSvg } from './Logos/NodeSvg';
import { JestSvg } from './Logos/JestSvg';
import { EnzymeSvg } from './Logos/EnzymeSvg';
import { ReactNativeSvg } from './Logos/ReactNativeSvg';
import { AWSSvg } from './Logos/AWSSvg';
import { SassSvg } from './Logos/SassSvg';
import { GitSvg } from './Logos/GitSvg';
import { VSCodeSvg } from './Logos/VSCodeSvg';

export const Skills = () => (
  <section className="p-4 pt-7 col-12">
    <h1 className="pb-5">Skills</h1>
    <section className="skills-wrapper pt-5">
      <SkillBox
        langText="Javascript"
        skillDocsUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      >
        <JavascriptSvg />
      </SkillBox>
      <SkillBox
        langText="ReactJs"
        skillDocsUrl="https://reactjs.org/docs/getting-started.html"
      >
        <ReactSvg />
      </SkillBox>
      <SkillBox
        langText="Redux"
        skillDocsUrl="https://redux.js.org/introduction/getting-started"
      >
        <ReduxSvg />
      </SkillBox>
      <SkillBox
        langText="Webpack"
        skillDocsUrl="https://webpack.js.org/concepts/"
      >
        <WebpackSvg />
      </SkillBox>
      <SkillBox
        langText="NodeJs"
        skillDocsUrl="https://nodejs.org/en/docs/"
      >
        <NodeSvg />
      </SkillBox>
      <SkillBox
        langText="Jest"
        skillDocsUrl="https://jestjs.io/docs/en/getting-started"
      >
        <JestSvg />
      </SkillBox>
      <SkillBox
        langText="Enzyme"
        skillDocsUrl="https://airbnb.io/enzyme/"
      >
        <EnzymeSvg />
      </SkillBox>
      <SkillBox
        langText="Sass"
        skillDocsUrl="https://sass-lang.com/documentation"
      >
        <SassSvg />
      </SkillBox>
      <SkillBox
        langText="React Native"
        skillDocsUrl="https://facebook.github.io/react-native/docs/getting-started"
      >
        <ReactNativeSvg />
      </SkillBox>
      <SkillBox
        langText="Amazon Web Services"
        skillDocsUrl="https://docs.aws.amazon.com/"
      >
        <AWSSvg />
      </SkillBox>
      <SkillBox
        langText="Git"
        skillDocsUrl="https://git-scm.com/doc"
      >
        <GitSvg />
      </SkillBox>
      <SkillBox
        langText="Vs Code"
        skillDocsUrl="https://code.visualstudio.com/docs"
      >
        <VSCodeSvg />
      </SkillBox>
    </section>
  </section>
);