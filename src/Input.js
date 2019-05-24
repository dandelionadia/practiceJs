import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handleAddTask = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        const { inputValue } = this.state

        return (
            <div>
                <input type="text" name="input" placeholder="text" value={inputValue} onChange={this.handleAddTask} />
            </div>
        )
    }
}

export { Input }