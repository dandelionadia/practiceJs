import React from 'react';
import PropTypes from 'prop-types'

class Autosuggestion extends React.Component {
    static propTypes = {
        // 
        suggestions: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    constructor() {
        super()
        this.state = {
            value: '',
            results: []
        }
    }

    handleValueChange = (event) => {
        const { value } = event.target
        const nextResults = this.findResults(value)

        this.setState({
            value: value,
            results: nextResults
        })
    }

    findResults = (value) => {
        const { suggestions } = this.props

        const results = suggestions.filter((suggestion) => {
            if (suggestion.name.startsWith(value)) {
                return true
            }
            return false
        })
        return results
    }

    render() {
        const { value } = this.state

        return (
            <div>
                <h2>Basic</h2>
                <input
                    type="text"
                    name="Autosuggestion"
                    value={value}
                    onChange={this.handleValueChange}
                />
                <ul>
                    <li>test</li>
                    <li>box</li>
                </ul>
            </div>
        )
    }
}

export { Autosuggestion }