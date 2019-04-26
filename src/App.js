import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Clear from './components/Clear';
import * as math from 'mathjs'

export default class App extends Component {
  state = {
    value: ""
  }

  handleClick = (val) => {
    this.setState({ 
      value: this.state.value + val
    })
  }

  handleEquals = () => {
    const evalText = this.state.value.replace('x', '*');
    this.setState({
      value: math.eval(evalText)
    });
  }

  handleClear = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input input={this.state.value} />
          </div>
          <div className="row">
            <Button handleClick={this.handleClick}>7</Button>
            <Button handleClick={this.handleClick}>8</Button>
            <Button handleClick={this.handleClick}>9</Button>
            <Button handleClick={this.handleClick}>/</Button>
            </div>
          <div className="row">
            <Button handleClick={this.handleClick}>4</Button>
            <Button handleClick={this.handleClick}>5</Button>
            <Button handleClick={this.handleClick}>6</Button>
            <Button handleClick={this.handleClick}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick}>1</Button>
            <Button handleClick={this.handleClick}>2</Button>
            <Button handleClick={this.handleClick}>3</Button>
            <Button handleClick={this.handleClick}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick}>.</Button>
            <Button handleClick={this.handleClick}>0</Button>
            <Button handleClick={this.handleEquals}>=</Button>
            <Button handleClick={this.handleClick}>+</Button>
          </div>
          <div className="row">
            <Clear handleClick={this.handleClear} />
          </div>
        </div>
      </div>
    );
  }
}

