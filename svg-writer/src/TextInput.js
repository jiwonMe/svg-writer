import React, { Component } from 'react';

class TextInput extends Component {
  state = {
    text: `<svg width="210" height="120" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="
    M 
    0 0
    
    C 
    50 100
    150 0
    
    200 100
    
    " stroke="black"/>
    <path d="
    M 
    150 0
    200 100"
    stroke="black"
    stroke-dasharray="3"
    />
    <path d="
    M 
    50 100
    0 0"
    stroke="black"
    stroke-dasharray="3"
    />
    <circle cx="50" cy="100" r="4" fill="blue"/>
    <circle cx="150" cy="0" r="4" fill="blue"/>
    </svg>`
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div>
          <textarea
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>
        <div
        dangerouslySetInnerHTML={ {__html: this.state.text} }
        >
        </div>
      </div>
    );
  }
}

export default TextInput;