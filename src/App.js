import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Main/Main";
import ArticleMainPage from "./pages/Home/Article/Article";
import ArticlePage from "./pages/Home/Article/ArticlePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/article/page/:id" component={ArticlePage} />
        <Route path="/article" component={ArticleMainPage} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
