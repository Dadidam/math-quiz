import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Modal, Table } from 'antd';
import { topColumns } from 'helpers/hall-of-fame';

const Top = props => {
  const showPagination = props.top.bestPlayers.length > 10;

  function info() {
    Modal.info({
      title: 'Best Quiz Players',
      content: (
        <Table
          columns={topColumns}
          dataSource={props.top.bestPlayers}
          size="small"
          pagination={showPagination}
        />
      ),
      centered: true,
      onOk() {}
    });
  }

  return (
    <div id="top-container">
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

export default connect(mapStateToProps)(Top);
