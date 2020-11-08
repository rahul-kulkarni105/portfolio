import React from 'react';
import { SkillBox } from './SkillBox';
import { JavascriptSvg } from '../Logos/JavascriptSvg';
import { TypeScriptSvg } from '../Logos/TypeScriptSvg'
import { ReactSvg } from '../Logos/ReactSvg';
import { ReduxSvg } from '../Logos/ReduxSvg';
import { WebpackSvg } from '../Logos/WebpackSvg';
import { NodeSvg } from '../Logos/NodeSvg';
import { JestSvg } from '../Logos/JestSvg';
import { EnzymeSvg } from '../Logos/EnzymeSvg';
import { CypressSvg } from '../Logos/CypressSvg'
import { ReactNativeSvg } from '../Logos/ReactNativeSvg';
import { GoogleAnalyticsSvg } from '../Logos/GoogleAnalyticsSvg'
import { AdobeAnalyticsSvg } from '../Logos/AdobeAnalyticsSvg'
import { MongoDbSvg } from '../Logos/MongoDbSvg'
import { AWSSvg } from '../Logos/AWSSvg';
import { GoogleCloudSvg } from '../Logos/GoogleCloudSvg'
import { SassSvg } from '../Logos/SassSvg';
import { SusySvg } from '../Logos/SusySvg'
import { BurbonNeatSvg } from '../Logos/BurbonNeatSvg'
import { TailwindSvg } from '../Logos/TailwindSvg';
import { GitSvg } from '../Logos/GitSvg';
import { SourceTreeSvg } from '../Logos/SourceTreeSvg'
import { VSCodeSvg } from '../Logos/VSCodeSvg';
import { GreenSockSvg } from '../Logos/GreenSockSvg';
import { BootstrapSvg } from '../Logos/BootstrapSvg';
import { HerokuSvg } from '../Logos/HerokuSvg';
import { VueSvg } from '../Logos/VueSvg';
import { VuexSvg } from '../Logos/VuexSvg'
import { AngularSvg } from '../Logos/AngularSvg';
import { NgRxSvg } from '../Logos/NgRxSvg';

export const Skills = () => (
  <section className="p-4 pt-7 col-12 skills__component">
    <h1 className="pb-5">Skills</h1>
    <section className="pb-5">
      <p>Client</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="Javascript"
          skillDocsUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          <JavascriptSvg />
        </SkillBox>
        <SkillBox
          langText="TypeScript"
          skillDocsUrl="https://www.typescriptlang.org/docs/"
        >
          <TypeScriptSvg />
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
        <SkillBox langText="VueJs" skillDocsUrl="https://vuejs.org/">
          <VueSvg />
        </SkillBox>
        <SkillBox langText="Vuex" skillDocsUrl="https://vuex.vuejs.org/">
          <VuexSvg />
        </SkillBox>
        <SkillBox langText="Angular" skillDocsUrl="https://angular.io/docs">
          <AngularSvg />
        </SkillBox>
        <SkillBox langText="NgRx" skillDocsUrl="https://ngrx.io/docs">
          <NgRxSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5">
      <p>Server</p>
      <section className="skills-wrapper">
        <SkillBox langText="NodeJs" skillDocsUrl="https://nodejs.org/en/docs/">
          <NodeSvg />
        </SkillBox>
        <SkillBox
          langText="Heroku"
          skillDocsUrl="https://devcenter.heroku.com/categories/reference"
        >
          <HerokuSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5">
      <p>Data</p>
      <section className="skills-wrapper">
        <SkillBox langText="Mongo DB" skillDocsUrl="https://docs.mongodb.com/">
          <MongoDbSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5">
      <p>Mobile</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="React Native"
          skillDocsUrl="https://facebook.github.io/react-native/docs/getting-started"
        >
          <ReactNativeSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5">
      <p>Testing</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="Jest"
          skillDocsUrl="https://jestjs.io/docs/en/getting-started"
        >
          <JestSvg />
        </SkillBox>
        <SkillBox langText="Enzyme" skillDocsUrl="https://airbnb.io/enzyme/">
          <EnzymeSvg />
        </SkillBox>
        <SkillBox langText="Cypress" skillDocsUrl="https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell">
          <CypressSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5">
      <p>Css</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="Sass"
          skillDocsUrl="https://sass-lang.com/documentation"
        >
          <SassSvg />
        </SkillBox>
        <SkillBox
          langText="Tailwind"
          skillDocsUrl="https://tailwindcss.com/docs/installation"
        >
          <TailwindSvg />
        </SkillBox>
        <SkillBox
          langText="Bootstrap"
          skillDocsUrl="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
        >
          <BootstrapSvg />
        </SkillBox>
        <SkillBox
          langText="GreenSockJs"
          skillDocsUrl="https://greensock.com/docs/"
        >
          <GreenSockSvg />
        </SkillBox>
        <SkillBox
          langText="Susy"
          skillDocsUrl="https://www.oddbird.net/susy/docs/"
        >
          <SusySvg />
        </SkillBox>
        <SkillBox
          langText="Burbon Neat"
          skillDocsUrl="https://neat.bourbon.io/"
        >
          <BurbonNeatSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5">
      <p>Tools</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="Webpack"
          skillDocsUrl="https://webpack.js.org/concepts/"
        >
          <WebpackSvg />
        </SkillBox>
        <SkillBox langText="Git" skillDocsUrl="https://git-scm.com/doc">
          <GitSvg />
        </SkillBox>
        <SkillBox langText="Source Tree" skillDocsUrl="https://confluence.atlassian.com/get-started-with-sourcetree">
          <SourceTreeSvg />
        </SkillBox>
        <SkillBox
          langText="Vs Code"
          skillDocsUrl="https://code.visualstudio.com/docs"
        >
          <VSCodeSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5">
      <p>Cloud</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="Amazon Web Services"
          skillDocsUrl="https://docs.aws.amazon.com/"
        >
          <AWSSvg />
        </SkillBox>
        <SkillBox
          langText="Google Cloud Platform"
          skillDocsUrl="https://cloud.google.com/docs"
        >
          <GoogleCloudSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5">
      <p>Analytics</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="Google Analytics"
          skillDocsUrl="https://developers.google.com/analytics"
        >
          <GoogleAnalyticsSvg />
        </SkillBox>
        <SkillBox
          langText="Adobe Analytics"
          skillDocsUrl="https://experienceleague.adobe.com/docs/analytics/landing/home.html?lang=en"
        >
          <AdobeAnalyticsSvg />
        </SkillBox>
      </section>
    </section>
  </section>
);
