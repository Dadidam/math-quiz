import React from 'react';
import { Button, Icon, Divider } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  return (
    <div>
      <h1>Math Quiz</h1>
      <Link to="/quiz">
        <Button type="primary" size="large">
          START
          <Icon type="rocket" />
        </Button>
      </Link>
      <Divider />
      <a href="/">
        <Icon type="trophy" />
        &nbsp;Best Quiz Players
      </a>
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
