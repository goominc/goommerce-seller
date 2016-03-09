import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { cloudinaryConfig } from 'react-cloudinary';

cloudinaryConfig({ cloud_name: 'linkshops', crop: 'limit' });

require('../stylesheets/main.scss');

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
        test
        {this.props.children}
      </div>
    );
  },
});

export default connect(
)(App);
