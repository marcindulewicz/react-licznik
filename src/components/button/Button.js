import React, { Component } from 'react';
import './Button.css';
import { ButtonGroup, Button } from 'react-bootstrap'

class Button3 extends Component {

    addFunc = () =>{
        this.props.addFuncProps()
    }
    reset2DefFunc = () =>{
        this.props.resetFuncProps()
    }
    reset2ZeroFunc = () =>{
        this.props.reset2zerofuncProps()
    }
    
    render() {



        return (
            <div>
            
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={this.addFunc} variant="primary">Dodaj</Button>
                    <Button onClick={this.reset2DefFunc} variant="success">ToDefault</Button>
                    <Button  onClick={this.reset2ZeroFunc} variant="danger">Reset</Button>
                </ButtonGroup>
            </div>
        )

    }
}
export default Button3;