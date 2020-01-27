import React, { Component } from 'react';
import './Counter.css';
import {Card, Button} from 'react-bootstrap'
import Button3 from './components/button/Button'
import Inputer from './components/input/Input'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            licznikDef: parseInt(this.props.defLicznik),
            licznik: parseInt(this.props.defLicznik),
            step: 1
        }
    }
    addNumber = () => {
        let stanobecny = this.state.licznik
        let kroczek = this.state.step
        this.setState({
            licznik: stanobecny+kroczek
        })
    }
    reset2Def = () => {

        this.setState({
            licznik: this.state.licznikDef
        })
    }
    reset2Zero = () => {

        this.setState({
            licznik: 0
        })
    }
    newStep = (data) => {
        
       
        let nowyKrok = data
        this.setState({
            step: nowyKrok
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body className='black'>Licznik: {this.state.licznik}</Card.Body>
                    <br></br>
                    <Button3 reset2zerofuncProps={this.reset2Zero} addFuncProps={this.addNumber} resetFuncProps={this.reset2Def}/>
                    <br></br>
                    <Inputer addStepFuncProps={this.newStep} valueProps={this.state.step}/>
                </Card>
            </div>
        )

    }
}
export default Counter;