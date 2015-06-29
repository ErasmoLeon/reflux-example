var Reflux = require("reflux");
var ProfileActions = require("../actions/ProfileActions.js").ProfileActions;

var person = {
  name: "Erasmo",
  age: 26
};

var ProfileStore = Reflux.createStore({
  listenables: [ProfileActions],
  onUpdateAge() {
    let person = {};
    person.age = Math.random() * 100;
    this.trigger({person});
  },
  getInitialState() {
    return {person};
  }
});

module.exports.ProfileStore = ProfileStore;


