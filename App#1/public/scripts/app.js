'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'THIS IS CODE'
  ),
  React.createElement('br', null),
  React.createElement(
    'p',
    null,
    'This is other info'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
