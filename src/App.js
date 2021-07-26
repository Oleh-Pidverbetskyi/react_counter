import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  }

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <React.Fragment>
        <h1>{`Count: ${count}`}</h1>
        <button
          type="button"
          className="btn"
          onClick={this.addOne}
        >
          Add One
        </button>
        <button
          type="button"
          className="btn"
          onClick={this.add100}
        >
          Add Hundred
        </button>
        <button
          type="button"
          className="btn"
          onClick={this.increase}
        >
          Increase
        </button>
      </React.Fragment>
    );
  }
}

export default App;
