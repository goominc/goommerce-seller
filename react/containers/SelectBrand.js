import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const _ = require('lodash');

const SelectBrand = React.createClass({
  propTypes: {
    auth: PropTypes.object.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  componentDidMount() {
    $('#selectBrand').modal('show');
  },
  handleSelect() {
    const { router } = this.context;
    router.push(`/brands/${this.refs.brand.value}`);
  },
  render() {
    const { auth } = this.props;
    const brands = _.filter(auth.roles,
      (r) => r.type === 'owner' || r.type === 'staff').map((r) => r.brand);
    return (
      <div className="modal fade" id="selectBrand" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">Select brand</h4>
            </div>
            <div className="modal-body">
              <select className="form-control" ref="brand">
                {brands.map((b, idx) => (<option key={idx} value={b.id}>{b.id}</option>))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={this.handleSelect}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default connect(
  (state) => ({ auth: state.auth })
)(SelectBrand);
