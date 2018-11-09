import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import LoginControl from './LoginControl';
import NumberList from './ListAndKeys';
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormatedDate date={this.state.date} />
      </div>
    );
  }
}

function FormatedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

var App = () => (    <div>
  <Clock />
  <Clock />
  <Clock />
</div>);

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

const numbers = [1,2,3,4]

ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
