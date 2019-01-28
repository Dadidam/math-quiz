import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Routes from './Routes';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-3538654-7');
      ReactGA.pageview('/home');
    }
  }

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
        <Footer show={this.props.location.pathname === '/'} />
      </div>
    );
  }
}

export default withRouter(App);
