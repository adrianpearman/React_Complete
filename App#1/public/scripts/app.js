'use strict';

var app = {
  title: 'Another Title',
  subTitle: 'Another SubTitle',
  options: []
};

var appRoot = document.getElementById('app');

var onFormSumit = function onFormSumit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    renderOptionsApp();
  } else {
    alert('Please enter an option');
  }
};

var clearOptions = function clearOptions(event) {
  event.preventDefault();
  app.options = [];
  renderOptionsApp();
};

var makeDecision = function makeDecision() {
  var randNumber = Math.floor(Math.random() * app.options.length);
  var randSelection = app.options[randNumber];
  console.log(randSelection);
};

var renderOptionsApp = function renderOptionsApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subTitle ? React.createElement(
      'p',
      null,
      app.subTitle
    ) : null,
    app.options.length > 0 ? React.createElement(
      'p',
      null,
      'Here are your options'
    ) : React.createElement(
      'p',
      null,
      'No options entered. ',
      React.createElement('br', null),
      ' Please enter an option'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: makeDecision },
      ' What should i do? '
    ),
    app.options.length === 0 ? null : React.createElement(
      'button',
      { onClick: clearOptions },
      'Clear Option'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSumit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderOptionsApp();
