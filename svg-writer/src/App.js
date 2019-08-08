import React, { Component } from 'react';
import TextInput from './TextInput';

class App extends Component {
  render() {
    return (
      <div
      style={{
        width: 600,
        margin: "0 auto"
      }}
      >
      svg 코드 입력
      <TextInput/>
      </div>
    );
  }
}

export default App;