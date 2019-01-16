import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flex-wrapper">
          <div className="flex-container">
            <div className="flex-box">
              <Routes />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
