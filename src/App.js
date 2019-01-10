import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './Routes';
import Footer from './components/Footer';
import { getUser } from 'actions/user';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
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
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default withRouter(
  connect(
    mapStateToProps,
    { getUser }
  )(App)
);
