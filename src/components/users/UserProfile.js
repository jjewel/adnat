import React, { Component } from 'react';
import Organisations from '../organisations/Organisations';
import CreateOrganisation from '../organisations/CreateOrganisation';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    const { organisationId, name } = this.props.user;
    return (
      <div>
        <div>Logged in as {name}</div>
        {!organisationId && (
          <div>
            You aren't a member of any organisations. <br />
            Join an existing one or create a new one.
          </div>
        )}
        <Organisations />
        <CreateOrganisation />
      </div>
    );
  }
}

export default UserProfile;
