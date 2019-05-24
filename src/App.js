import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleButtonClick = () => {
    const isOpen = this.state.isOpen
    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const { isOpen } = this.state

    return (
      <div className="App">
        <button className="btn" onClick={this.handleButtonClick}>button</button>
        {
          isOpen && (
            <p>Hello Artem =*</p>
          )
        }
      </div >
    );
  }
}

export default App;
