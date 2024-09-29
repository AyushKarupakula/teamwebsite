import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TeamPresentation from './components/TeamPresentation';
import ProjectDescription from './components/ProjectDescription';
import ProcessDescription from './components/ProcessDescription';
import VideoDemo from './components/VideoDemo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={TeamPresentation} />
          <Route path="/project" component={ProjectDescription} />
          <Route path="/process" component={ProcessDescription} />
          <Route path="/demo" component={VideoDemo} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;