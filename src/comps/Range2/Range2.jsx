import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";


export default class Range extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 16128000,
            value2: 10,
            value3: 10,
            value4: {
                min: 5,
                max: 10,
            },
            value5: {
                min: 3,
                max: 7,
            },
        };
    }

    render() {
        return (
            <div className="range" style={{ width: "240px" }}>
                <div className="number">{this.state.value}$</div>
                <InputRange

                    maxValue={50000000}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    onChangeComplete={value => console.log(value)}
                />
            </div>
        );
    }
}
