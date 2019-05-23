import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      btn: 'button',
      text: 'Hello Artem =*'
    }
  }

  stateText = () => {
    const isOpen = this.state.isOpen
    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const { isOpen } = this.state
    const { btn } = this.state
    const { text } = this.state

    return (
      <div className="App">
        <button className="btn" onClick={this.stateText}>{btn}</button>
        {
          isOpen && (
            <p toggle="foo">{text}</p>
          )
        }
      </div >
    );
  }
}

export default App;
