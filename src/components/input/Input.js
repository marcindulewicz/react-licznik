import React, { Component } from 'react';
import './Input.css';
import { InputGroup, FormControl } from 'react-bootstrap'

class Inputer extends Component {

    newStepFucn = () => {
        let krok = parseInt(this._inputStep.value)
        this.props.addStepFuncProps(krok)

    }
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text >Krok</InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl onChange={this.newStepFucn} ref={(data) => { this._inputStep = data}}  type='number' value={this.props.valueProps} />
                </InputGroup>
            </div>
        )

    }
}
export default Inputer;