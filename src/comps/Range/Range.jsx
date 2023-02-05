import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";


export default class Range extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            value4: {
                
                min: 0,
                max: 50000000,
            },
            
        };
    }

    render() {
        return (
            <div className="range" style={{ width: "240px" }}>
                <div className="number">{this.state.value4.min}$</div>
                <div className="number2">{this.state.value4.max}$</div>
                <InputRange
                    maxValue={50000000}
                    minValue={50000}
                    step={50000}
                    
                    value={this.state.value4}
                    onChange={value => this.setState({ value4: value })}
                     />
            </div>
        );
    }
}
