import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('sets state on button click', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  app.handleClick("1");
  expect(app.state.value).toBe("1");
});

it('evaluates the expression when equals is clicked', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  app.setState({ value: "1+2" });
  app.handleEquals();
  expect(app.state.value).toBe(3);
});

it('handles multiplication correctly', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  app.setState({ value: "2x3" });
  app.handleEquals();
  expect(app.state.value).toBe(6);
});

it('clears the input when clear is clicked', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  app.setState({ value: "1+2" });
  app.handleClear();
  expect(app.state.value).toBe("");
});