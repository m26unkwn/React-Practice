import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Topic } from "./Topic";
import { TopicHeader } from "./TopicHeader";
export function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <TopicHeader />

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
