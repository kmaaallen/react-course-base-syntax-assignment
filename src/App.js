import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'JoeBloggs'
    }

  changeUserNameHandler = (event) => {
    this.setState({
      username: event.target.value,
  })
}

  render() {
    const style = {
      fontStyle: 'italic'
    }

    return (
      <div className="App">
        <h1 style={style} >User Profile Summary:</h1>
        <UserInput change={this.changeUserNameHandler} username={this.state.username} />
        <UserOutput content="Username:" secondContent={this.state.username}/>
        <UserOutput content="Email:" secondContent="fake123@gmail.com"/>
        <UserOutput content="Location:" secondContent="London, United Kingdom"/>
      </div>
    );
  }
}

export default App;
