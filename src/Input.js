import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            tasks: []
        }
    }

    handleAddTask = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    uniqueNumber = () => (
        Math.random().toString(36).substring(2)
        + (new Date()).getTime().toString(36)
    )

    takeData = () => {
        const { inputValue, tasks } = this.state
        const newTask = {
            id: this.uniqueNumber(),
            name: inputValue
        }
        this.setState({
            tasks: tasks.concat(newTask),
            inputValue: ''
        })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.takeData()
        }
    }

    render() {
        const { inputValue, tasks } = this.state

        return (
            <div>
                <input
                    type="text"
                    name="input"
                    placeholder="text"
                    value={inputValue}
                    onChange={this.handleAddTask}
                    onKeyPress={this.handleKeyPress}
                />
                {tasks.map((task) => (
                    <p key={task.id} >{task.name}</p>
                ))
                }
            </div>
        )
    }
}

export { Input }