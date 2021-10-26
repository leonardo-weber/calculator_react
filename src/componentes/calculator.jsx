import react, { Component } from "react";
import './calculator.css'
import Button from "./button";
import Display from "./display";


export default class Calculadora extends Component {

    setOperation (op) {
        console.log(op)
    }

    addDigit (n) {
        console.log(n)
    }

    clearDisplay () {
        console.log('limpo')
    }

    constructor(props) {
        super(props) 
        
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.clearDisplay = this.clearDisplay.bind(this)
        
    }

    render() {
        return (
            <div className = 'calculator'> 
            
                <Display value = '100' />
                <Button click = {this.clearDisplay}treecolumns label = 'AC'/>
                <Button operator label = '/'/>
                <Button label = '7'/>
                <Button label = '8'/>
                <Button label = '9'/>
                <Button operator label = '*'/>
                <Button label = '4'/>
                <Button label = '5'/>
                <Button label = '6'/>
                <Button operator label = '-'/>
                <Button label = '1'/>
                <Button label = '2'/>
                <Button label = '3'/>
                <Button operator label = '+'/>
                <Button twocolumns label = '0'/>
                <Button label = '.'/>
                <Button operator label = '=' />
                
                
              
            </div>
        )
    }
}