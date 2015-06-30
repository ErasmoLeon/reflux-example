import Reflux from 'reflux';
import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import ProfileStore from '../../stores/users/ProfileStore.jsx';
import ProfileActions from '../../actions/users/ProfileActions.jsx';

var Profile = React.createClass({
  mixins: [Reflux.connect(ProfileStore)],
  render() {
    var p = this.state.person;
    return (
      <div>
        <h1></h1>
        <h2 onClick={ProfileActions.updateAge}>{p.age}</h2>
      </div>
    );
  }
});

export default Profile;


