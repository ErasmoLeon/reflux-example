import React from 'react';
import Router from 'react-router';
Router.run(require('./routes.jsx'), Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler/>, document.body);
});
