var Reflux = require("reflux");
var React = require("react");
var ProfileStore = require("../stores/ProfileStore.js").ProfileStore;
var ProfileActions = require("../actions/ProfileActions.js").ProfileActions;

var Profile = React.createClass({
  mixins: [Reflux.connect(ProfileStore)],
  render() {
    var p = this.state.person;
    return (
      <div>
        <h1>{p.name}</h1>
        <h2 onClick={ProfileActions.updateAge}>{p.age}</h2>
      </div>
    );
  }
});


module.exports.Profile = Profile;


