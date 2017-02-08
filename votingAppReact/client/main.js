import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../import/client/App';
//corchetes no traem todo el export

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));

});
