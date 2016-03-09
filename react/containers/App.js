import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { cloudinaryConfig } from 'react-cloudinary';

import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSidebar';

cloudinaryConfig({ cloud_name: 'linkshops', crop: 'limit' });

require('../stylesheets/app.scss');

const App = React.createClass({
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
)(App);
