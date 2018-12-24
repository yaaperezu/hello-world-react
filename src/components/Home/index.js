
// Dependencies
import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            number1: 0,
            number2: 0,
            result: 0
        };

        this.handleCountClick = this.handleCountClick.bind(this);
        this.handleResultClick = this.handleResultClick.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
    }

    componentDidMount() {
        this.setState({
            count: 1
        });
    }

    handleCountClick(e) {
        if (e.target.id === 'add') {
            this.setState({
                count: this.state.count + 1
            });
        } else if (e.target.id === 'subtrack' && this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        } else if (e.target.id === 'reset') {
            this.setState({
                count: 0
            });
        }

    }

    handleResultClick(e) {
        this.setState({
            result: this.state.number1 + this.state.number2
        });
    }

    handleInputChanged(e) {
        if (e.target.id === 'number1') {
            this.setState({
                number1: Number(e.target.value)
            });
        } else {
            this.setState({
                number2: Number(e.target.value)
            });
        }
    }

    render() {
        console.log('Ingresa Render');

        return (
            <div className="Header">
                <h2>Counter: {this.state.count}</h2>

                <p>
                    <button id="add" onClick={this.handleCountClick}>+</button>
                    <button id="subtrack" onClick={this.handleCountClick}>-</button>
                    <button id="reset" onClick={this.handleCountClick}>Reset</button>
                </p>

                <p>
                    <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged} />
                    +
                    <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged} />

                    <button id="result" onClick={this.handleResultClick}>=</button>

                    {this.state.result}
                </p>
            </div>
        );
    }
}

export default Home;