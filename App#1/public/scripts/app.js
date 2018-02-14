'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Stateful Components
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleRandomPick = _this.handleRandomPick.bind(_this);
    _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // verifies whether the data submitted is valid JSON
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        // does nothing if there is an error
      }
    }

    // saves the current state to local storage

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Please enter an option';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option is already added';
      }

      // Adding the option value to the list of options
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'handleRandomPick',
    value: function handleRandomPick() {
      var randNumber = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randNumber]);
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteSingleOption',
    value: function handleDeleteSingleOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Action, { handleRandomPick: this.handleRandomPick, hasOptions: this.state.options.length > 0, options: this.state.options }),
        React.createElement(Options, { options: this.state.options, deleteOptionsHandle: this.handleDeleteOptions, deleteOption: this.handleDeleteSingleOption }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(event) {
      event.preventDefault();
      var option = event.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        // Setting input to a null value
        event.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error ? React.createElement(
          'p',
          null,
          this.state.error
        ) : null,
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { name: 'option', type: 'text' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// Stateless Components


var Options = function Options(props) {
  var options = props.options.map(function (option) {
    return React.createElement(Option, { key: option, value: option, deleteOption: props.deleteOption });
  });

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.deleteOptionsHandle },
      'Clear Option'
    ),
    React.createElement(
      'h3',
      null,
      'Current Options:'
    ),
    React.createElement(
      'p',
      null,
      'Options available: ',
      props.options.length
    ),
    React.createElement(
      'ol',
      null,
      options
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'li',
      null,
      props.value,
      React.createElement(
        'button',
        { onClick: function onClick() {
            props.deleteOption(props.value);
          } },
        'Remove'
      )
    )
  );
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subTitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecison App',
  subTitle: 'Put your life in the hands of a computer'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleRandomPick, disabled: !props.hasOptions },
      'What Should I do?'
    )
  );
};

// Using Local Storage
// localStorage.setItem('name'. 'Adrian')
// localStorage.getItem('name')
// localStorage.remove('name')
// .clear
// let json = JSON.stringify({ age: 26})
// JSON.parse(json)
// --------------------------------

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
