import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Main/Main'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
