import React, { Component } from 'react';
import './App.css';

import Footer from './footer/Footer';
import Header from './header/Header';
import ProjectList from './projects/ProjectList';

class App extends Component {
  constructor(props) {
    super(props);

    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.state = {
      theme: userPrefersDark ? 'dark' : 'light',
    };
    document.body.className = this.state.theme + '-theme';
  }

  async switchTheme() {
    await this.setState({ theme: this.state.theme === 'dark' ? 'light' : 'dark' });
    document.body.className = this.state.theme + '-theme';
  } 

  render() {
    return (
        <div className="App">
          <Header switchTheme={this.switchTheme.bind(this)} theme={this.state.theme}></Header>
          <hr></hr>
          <ProjectList></ProjectList>
          <hr></hr>
          <Footer></Footer>
        </div>
    );
  }
}

export default App;
