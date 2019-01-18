import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Modal, Table } from 'antd';
import { toggleTopMode } from 'actions/top';
import { topColumns } from 'helpers/hall-of-fame';

const Top = props => {
  function info() {
    Modal.info({
      title: 'Best Quiz Players',
      content: (
        <Table
          columns={topColumns}
          dataSource={props.top.bestPlayers}
          size="small"
        />
      ),
      centered: true,
      onOk() {}
    });
  }

  return (
    <div>
      <Link to="" onClick={info}>
        <Icon type="trophy" />
        &nbsp;Best Quiz Players
      </Link>
    </div>
  );
};

function mapStateToProps({ top }) {
  return { top };
}

export default connect(
  mapStateToProps,
  { toggleTopMode }
)(Top);
