import React, { Component } from 'react';
import { Button, Icon, Divider } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuizScoreAction extends Component {
  render() {
    const { quiz } = this.props;

    // no score - no actions available:
    if (quiz.score === 0) return null;

    return (
      <div>
        <Divider />
        <Link to="/quiz/share">
          <Button type="primary" id="share-button">
            Share my Score <Icon type="arrow-right" />
          </Button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ quiz }) {
  return { quiz };
}

export default connect(mapStateToProps)(QuizScoreAction);
