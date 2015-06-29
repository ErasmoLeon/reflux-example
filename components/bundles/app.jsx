var React = require("react");
var Profile = React.createFactory(require("../Profile.jsx").Profile);
React.render(new Profile(), document.getElementById("workspace"));
