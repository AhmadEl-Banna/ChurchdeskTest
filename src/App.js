import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import {getCommentsOfPost , getPosts, getPostById} from './services/posts'
import './App.css';


class App extends Component {
  async componentDidMount(){
    await getPostById(1)
    await getPosts()
    await getCommentsOfPost(1)
  }
  render() {
    const { counter, dispatch } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          Clicked: {counter} times
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>{' '}
          <button onClick={() => dispatch({ type: 'INCREMENT_IF_ODD' })}>Increment if odd</button>{' '}
          <button onClick={() => dispatch({ type: 'INCREMENT_ASYNC' })}>Increment async</button>
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const select = (state) => ({
  counter: state.counter
});

export default connect(select)(App);
