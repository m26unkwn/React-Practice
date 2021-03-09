import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const TopicHeader = () => {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
    </div>
  );
};
