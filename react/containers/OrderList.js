import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { orderActions } from 'goommerce-redux';

const OrderList = React.createClass({
  propTypes: {
    brandId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    loadBrandOrders: PropTypes.func.isRequired,
    orders: PropTypes.array,
  },
  componentDidMount() {
    const { brandId, date, loadBrandOrders } = this.props;
    loadBrandOrders(brandId, date);
  },
  render() {
    const { orders = [] } = this.props;
    return (
      <div>
        <h1 className="page-header">Orders</h1>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Unit Price(KRW)</th>
                <th>Count</th>
                <th>Total(KRW)</th>
                <th>Total(USD)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, idx) => (
                <tr key={idx}>
                  <td>{o.id}</td>
                  <td>{o.KRW}</td>
                  <td>{o.orderedCount}</td>
                  <td>{o.totalKRW}</td>
                  <td>{o.totalUSD}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    );
  },
});

export default connect(
  (state, ownProps) => {
    const { brandId, date } = ownProps.params;
    const { key } = orderActions.loadBrandOrders(brandId, date);
    return { brandId, date, orders: state.order[key] };
  }, orderActions
)(OrderList);
