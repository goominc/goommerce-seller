import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { cloudinaryConfig } from 'react-cloudinary';

import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSidebar';

require('../stylesheets/app.scss');

cloudinaryConfig({ cloud_name: 'linkshops', crop: 'limit' });

const App = React.createClass({
  propTypes: {
    auth: PropTypes.object,
    children: PropTypes.node,
    params: PropTypes.object.isRequired,
  },
  childContextTypes: {
    baseUrl: PropTypes.string.isRequired,
  },
  getChildContext() {
    return { baseUrl: `/s/brands/${this.props.params.brandId}` };
  },
  render() {
    return (
      <div>
        <AppHeader />
        <div className="container-fluid">
          <div className="row">
            <AppSidebar />
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default connect(
  (state) => ({ auth: state.auth })
)(App);
