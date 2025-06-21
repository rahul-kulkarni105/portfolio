import React from "react";
import { SkillBox } from "./SkillBox";
import { JavascriptSvg } from "../Logos/JavascriptSvg";
import { TypeScriptSvg } from "../Logos/TypeScriptSvg";
import { ReactSvg } from "../Logos/ReactSvg";
import { ReduxSvg } from "../Logos/ReduxSvg";
import { WebpackSvg } from "../Logos/WebpackSvg";
import { NodeSvg } from "../Logos/NodeSvg";
import { JestSvg } from "../Logos/JestSvg";
import { EnzymeSvg } from "../Logos/EnzymeSvg";
import { CypressSvg } from "../Logos/CypressSvg";
import { ReactNativeSvg } from "../Logos/ReactNativeSvg";
import { GoogleAnalyticsSvg } from "../Logos/GoogleAnalyticsSvg";
import { AdobeAnalyticsSvg } from "../Logos/AdobeAnalyticsSvg";
import { MongoDbSvg } from "../Logos/MongoDbSvg";
import { AWSSvg } from "../Logos/AWSSvg";
import { GoogleCloudSvg } from "../Logos/GoogleCloudSvg";
import { SassSvg } from "../Logos/SassSvg";
import { SusySvg } from "../Logos/SusySvg";
import { BurbonNeatSvg } from "../Logos/BurbonNeatSvg";
import { TailwindSvg } from "../Logos/TailwindSvg";
import { GitSvg } from "../Logos/GitSvg";
import { SourceTreeSvg } from "../Logos/SourceTreeSvg";
import { VSCodeSvg } from "../Logos/VSCodeSvg";
import { GreenSockSvg } from "../Logos/GreenSockSvg";
import { BootstrapSvg } from "../Logos/BootstrapSvg";
import { HerokuSvg } from "../Logos/HerokuSvg";
import { VueSvg } from "../Logos/VueSvg";
import { VuexSvg } from "../Logos/VuexSvg";
import { AngularSvg } from "../Logos/AngularSvg";
import { NgRxSvg } from "../Logos/NgRxSvg";
import { ViteSvg } from "../Logos/ViteSvg";
import { ExpressJsSvg } from "../Logos/ExpressJsSvg";
import { ReactTestingLibrarySvg } from "../Logos/ReactTestingLibrarySvg";
import { JenkinsSvg } from "../Logos/JenkinsSvg";
import { JiraSvg } from "../Logos/JiraSvg";
import { RollupSvg } from "../Logos/RollupSvg";
import { InVisionSvg } from "../Logos/InVisionSvg";
import { ZeplinSvg } from "../Logos/ZeplinSvg";
import { AdobeSvg } from "../Logos/AdobeSvg";
import { WhimsicalSvg } from "../Logos/WhimsicalSvg";
import { PivotalCloudFoundrySvg } from "../Logos/PivotalCloudFoundrySvg";
import { FigmaSvg } from "../Logos/FigmaSvg";
import { JotaiSvg } from "../Logos/JotaiSvg";
import { ReactQuerySvg } from "../Logos/ReactQuerySvg";
import { HashiCorpSvg } from "../Logos/HashiCorpSvg";
import { VitestSvg } from "../Logos/VitestSvg";
import { StyledComponentsSvg } from "../Logos/StyledComponentsSvg";
import { RemixSvg } from "../Logos/RemixSvg";
import { ReactRouterSvg } from "../Logos/ReactRouterSvg";
import { AkamaiSvg } from "../Logos/AkamaiSvg";
import { NginxSvg } from "../Logos/NginxSvg";
import { SplunkSvg } from "../Logos/SplunkSvg";
import { ApplePaySvg } from "../Logos/ApplePaySvg";
import { GooglePaySvg } from "../Logos/GooglePaySvg";
import { SamsungPaySvg } from "../Logos/SamsungPaySvg";
import { AmazonPaySvg } from "../Logos/AmazonPaySvg";
import { ApigeeSvg } from "../Logos/ApigeeSvg";
import { NewRelicSvg } from "../Logos/NewRelicSvg";
import { StoryBookSvg } from "../Logos/StoryBookSvg";

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
          langText="React Router"
          skillDocsUrl="https://reactrouter.com/home"
        >
          <ReactRouterSvg />
        </SkillBox>
        <SkillBox
          langText="Remix"
          skillDocsUrl="https://remix.run/docs/en/main"
        >
          <RemixSvg />
        </SkillBox>
        <SkillBox
          langText="Redux"
          skillDocsUrl="https://redux.js.org/introduction/getting-started"
        >
          <ReduxSvg />
        </SkillBox>
        <SkillBox langText="Jotai" skillDocsUrl="https://jotai.org/docs">
          <JotaiSvg />
        </SkillBox>
        <SkillBox
          langText="React Query"
          skillDocsUrl="https://tanstack.com/query/latest"
        >
          <ReactQuerySvg />
        </SkillBox>
        <SkillBox
          langText="Story Book"
          skillDocsUrl="https://storybook.js.org/docs"
        >
          <StoryBookSvg />
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
        <SkillBox langText="ExpressJs" skillDocsUrl="https://expressjs.com/">
          <ExpressJsSvg />
        </SkillBox>
        <SkillBox
          langText="Akamai"
          skillDocsUrl="https://techdocs.akamai.com/home"
        >
          <AkamaiSvg />
        </SkillBox>
        <SkillBox langText="Nginx" skillDocsUrl="https://nginx.org/en/docs/">
          <NginxSvg />
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
        <SkillBox
          langText="RTL"
          skillDocsUrl="https://testing-library.com/docs/"
        >
          <ReactTestingLibrarySvg />
        </SkillBox>
        <SkillBox langText="Vitest" skillDocsUrl="https://vitest.dev/">
          <VitestSvg />
        </SkillBox>
        <SkillBox langText="Enzyme" skillDocsUrl="https://airbnb.io/enzyme/">
          <EnzymeSvg />
        </SkillBox>
        <SkillBox
          langText="Cypress"
          skillDocsUrl="https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell"
        >
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
          langText="Styled Components"
          skillDocsUrl="https://styled-components.com/docs"
        >
          <StyledComponentsSvg />
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
        <SkillBox langText="Vite" skillDocsUrl="https://vitejs.dev/">
          <ViteSvg />
        </SkillBox>
        <SkillBox langText="Rollup" skillDocsUrl="https://rollupjs.org/">
          <RollupSvg />
        </SkillBox>
        <SkillBox
          langText="Hashi Corp Vault"
          skillDocsUrl="https://developer.hashicorp.com/vault/docs"
        >
          <HashiCorpSvg />
        </SkillBox>
        <SkillBox langText="Git" skillDocsUrl="https://git-scm.com/doc">
          <GitSvg />
        </SkillBox>
        <SkillBox langText="Jenkins" skillDocsUrl="https://www.jenkins.io/">
          <JenkinsSvg />
        </SkillBox>
        <SkillBox
          langText="Jira"
          skillDocsUrl="https://www.atlassian.com/software/jira/guides/getting-started/introduction"
        >
          <JiraSvg />
        </SkillBox>
        <SkillBox
          langText="Source Tree"
          skillDocsUrl="https://confluence.atlassian.com/get-started-with-sourcetree"
        >
          <SourceTreeSvg />
        </SkillBox>
        <SkillBox
          langText="Adobe Experience Manager"
          skillDocsUrl="https://experienceleague.adobe.com/docs/experience-manager.html?lang=en"
        >
          <AdobeSvg />
        </SkillBox>
        <SkillBox
          langText="New Relic"
          skillDocsUrl="https://docs.newrelic.com/"
        >
          <NewRelicSvg />
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
      <p>Design</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="InVision"
          skillDocsUrl="https://support.invisionapp.com/"
        >
          <InVisionSvg />
        </SkillBox>
        <SkillBox
          langText="Figma"
          skillDocsUrl="https://help.figma.com/hc/en-us"
        >
          <FigmaSvg />
        </SkillBox>
        <SkillBox langText="Zeplin" skillDocsUrl="https://docs.zeplin.dev/docs">
          <ZeplinSvg />
        </SkillBox>
        <SkillBox
          langText="Whimsical"
          skillDocsUrl="https://whimsical.com/docs"
        >
          <WhimsicalSvg />
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
        <SkillBox langText="Apigee" skillDocsUrl="https://docs.apigee.com/">
          <ApigeeSvg />
        </SkillBox>
        <SkillBox
          langText="Pivotal Cloud Foundry"
          skillDocsUrl="https://docs.cloudfoundry.org/"
        >
          <PivotalCloudFoundrySvg />
        </SkillBox>
        <SkillBox
          langText="Splunk"
          skillDocsUrl="https://docs.splunk.com/Documentation"
        >
          <SplunkSvg />
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
        <SkillBox
          langText="Adobe Tag Manager"
          skillDocsUrl="https://experienceleague.adobe.com/docs/experience-platform/tags/home.html?lang=en"
        >
          <AdobeSvg />
        </SkillBox>
      </section>
    </section>
    <section className="pb-5 last-section">
      <p>Features</p>
      <section className="skills-wrapper">
        <SkillBox
          langText="Apple Pay"
          skillDocsUrl="https://developer.apple.com/documentation/passkit/apple-pay"
        >
          <ApplePaySvg />
        </SkillBox>
        <SkillBox
          langText="Google Pay"
          skillDocsUrl="https://developers.google.com/pay/api/web/overview"
        >
          <GooglePaySvg />
        </SkillBox>
        <SkillBox
          langText="Samsung Pay"
          skillDocsUrl="https://developer.samsung.com/pay/native/about-this-guide.html"
        >
          <SamsungPaySvg />
        </SkillBox>
        <SkillBox
          langText="Amazon Pay"
          skillDocsUrl="https://developer.amazon.com/docs/amazon-pay/intro.html"
        >
          <AmazonPaySvg />
        </SkillBox>
      </section>
    </section>
  </section>
);
