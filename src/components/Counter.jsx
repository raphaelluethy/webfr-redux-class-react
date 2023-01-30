import React from "react";
import {Button} from "reactstrap";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);


    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    componentDidMount() {
        console.log('Counter mounted');
    }

    componentWillUnmount() {
        console.log('Counter unmounted');
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h5>(Class Based)</h5>
                <p>Current counter value: <strong>{this.state.counter}</strong></p>
                <Button onClick={this.increment}>Increment</Button>
                <Button onClick={this.decrement}>Decrement</Button>
            </div>
        );
    }
}

export default Counter;

