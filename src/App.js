import React, { Component } from 'react';
import './App.css';

import Footer from './footer/Footer';
import Header from './header/Header';
import ProjectList from './projects/ProjectList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ProjectList></ProjectList>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
