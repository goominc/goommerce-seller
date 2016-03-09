import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const OrderList = React.createClass({
  propTypes: {
    children: PropTypes.node,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  componentDidMount() {
  },
  render() {
    return (
      <div>
        orders
      </div>
    );
  },
});

export default connect(
)(OrderList);
