import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const TopicHeader = () => {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Choose Topic</h2>

      <ul>
        <li>
          <Link to={`${match.url}/componentsawtawtawt`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-stateawetawtawt`}>
            Props v. State
          </Link>
        </li>
      </ul>
    </div>
  );
};
