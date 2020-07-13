import React, { Component } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import MainPage from "./Article";
import ArticlePage from "./ArticlePage";

class Article extends Component {
  render() {
    // let match = useRouteMatch();

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
