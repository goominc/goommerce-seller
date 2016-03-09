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
        <h1 className="page-header">OrderList</h1>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>Integer</td>
                <td>nec</td>
                <td>odio</td>
                <td>Praesent</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>libero</td>
                <td>Sed</td>
                <td>cursus</td>
                <td>ante</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    );
  },
});

export default connect(
)(OrderList);
