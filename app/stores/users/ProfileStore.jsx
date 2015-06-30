import Reflux from 'reflux';
import ProfileActions from '../../actions/users/ProfileActions.jsx';

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

export default ProfileStore;






