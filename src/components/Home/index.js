import React from 'react';
import { Button, Icon, Divider } from 'antd';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import './style.css';

const Home = ({ user }) => {
  // const renderGreetings = () => {
  //   if (!user) return null;
  //   return <h4>Nice to see you, {user.name}, again!</h4>;
  // };

  return (
    <div className="flex-wrapper">
      <div className="flex-container">
        <div className="flex-box">
          <h1>Math Quiz</h1>
          {/* {renderGreetings()} */}
          <Button type="primary" size="large">
            START
            <Icon type="rocket" />
          </Button>
          <Divider />
          <a href="/"><Icon type="trophy" />&nbsp;Best Quiz Players</a>
        </div>
      </div>
      <div className="sticky-footer">
        2019 &copy; Created with{' '}
        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by Sofia
        Vorontcova &amp; her Dad
      </div>
    </div>
  );
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Home);
