import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { Landing } from '../Components/Landing';
import { About } from '../Components/About';
import { Skills } from '../Components/Skills';
import { Work } from '../Components/Work';
import { Education } from '../Components/Education';
import { Contact } from '../Components/Contact';
import { NotFound } from '../Components/NotFound';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/work" component={Work} />
      <Route path="/education" component={Education} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}