import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import { orderActions } from 'goommerce-redux';

const OrderStats = React.createClass({
  propTypes: {
    brandId: PropTypes.string.isRequired,
    stats: PropTypes.array,
    loadBrandOrderStats: PropTypes.func.isRequired,
  },
  componentDidMount() {
    this.props.loadBrandOrderStats(this.props.brandId);
  },
  render() {
    const { brandId, stats = [] } = this.props;
    return (
      <div>
        <h1 className="page-header">Order Stats</h1>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((s, idx) => (
                <tr key={idx}>
                  <td>
                    <Link to={`/brands/${brandId}/orders/${s.date.substr(0, 10)}`}>{s.date.substr(0, 10)}</Link>
                  </td>
                  <td>{s.count}</td>
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
    const { brandId } = ownProps.params;
    const { key } = orderActions.loadBrandOrderStats(brandId);
    return { brandId, stats: state.order[key] };
  }, orderActions
)(OrderStats);
