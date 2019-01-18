import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/Home';
import Quiz from 'components/Quiz/index';
import Share from 'components/Quiz/Share';
import NotFound from 'components/NotFound';

export default ({ childProps }) => (
  <Switch>
    {/* home page route */}
    <Route path="/" exact component={Home} props={childProps} />
    <Route path="/quiz" exact component={Quiz} props={childProps} />
    <Route path="/quiz/share" exact component={Share} props={childProps} />

    {/* 404 page */}
    <Route component={NotFound} />
  </Switch>
);
