var Reflux = require("reflux");
var React = require("react");

var person = {
  "name": "Erasmo",
  "age": 26
};

var actions = Reflux.createActions([
  "updateAge"
]);

var store = Reflux.createStore({
  listenables: [actions],
  onUpdateAge() {
    person.age = Math.random() * 100;
    this.trigger({person});
  },
  getInitialState() {
    return {person};
  }
});

var Profile = React.createClass({
  mixins: [Reflux.connect(store)],
  render() {
    var p = this.state.person;
    return (
      <div>
        <h1>{p.name}</h1>
        <h2 onClick={actions.updateAge}>{p.age}</h2>
      </div>
    );
  }
});

module.exports.Profile = Profile;

