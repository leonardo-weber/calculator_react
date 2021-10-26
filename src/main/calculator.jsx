import react, { Component } from "react";
import './calculator.css'
import Button from "../componentes/button";
import Display from "../componentes/display";


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
                <Button click = {this.clearDisplay} treecolumns label = 'AC'/>
                <Button click = {this.setOperation}operator label = '/'/>
                <Button click = {this.addDigit}label = '7'/>
                <Button click = {this.addDigit} label = '8'/>
                <Button click = {this.addDigit} label = '9'/>
                <Button click = {this.setOperation} operator label = '*'/>
                <Button click = {this.addDigit} label = '4'/>
                <Button click = {this.addDigit} label = '5'/>
                <Button click = {this.addDigit} label = '6'/>
                <Button click = {this.setOperation} operator label = '-'/>
                <Button click = {this.addDigit} label = '1'/>
                <Button click = {this.addDigit} label = '2'/>
                <Button click = {this.addDigit} label = '3'/>
                <Button click = {this.setOperation} operator label = '+'/>
                <Button click = {this.addDigit} twocolumns label = '0'/>
                <Button click = {this.addDigit} label = '.'/>
                <Button click = {this.setOperation} operator label = '=' />
                
                
              
            </div>
        )
    }
}