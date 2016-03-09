import React, { PropTypes } from 'react';
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    children: PropTypes.node,
  },
  render() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className="active">
            <Link to="/">
              Order List
            </Link>
          </li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href="">Nav item</a></li>
        </ul>
      </div>
    );
  },
});
