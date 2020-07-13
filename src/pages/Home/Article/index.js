import React, { Component } from "react";
import {
  useRouteMatch,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import MainPage from "./Article";
import ArticlePage from "./ArticlePage";

let match = useRouteMatch();

class Article extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={match.path}>
            <MainPage />
          </Route>
          <Route exact path={`${match.path}/page`}>
            <ArticlePage />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Article;
