import React, {Component, PropTypes} from 'react';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

const defaultProps = {
    onPlus : createWarning("onPlus"),
    onSubtract : createWarning("onSubtract"),
    onRandomizeColor : createWarning("onRandomizeColor")
};

function createWarning(functionName) {
    console.warn(functionName + "is not defined ");
}

class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Background</button>

            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;