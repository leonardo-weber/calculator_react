import react, { Component } from "react";
import './calculator.css'
import Button from "../componentes/button";
import Display from "../componentes/display";


const inicialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    indexArray: 0
}


export default class Calculadora extends Component {

    state = { ...inicialState}

    setOperation (operation) { 
        if (this.state.indexArray === 0) {
            this.setState( { indexArray: 1, operation, clearDisplay: true})
        } else {
            const finishMath = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)

                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearDisplay()
                return
                }
            }
            catch {
                values[0] = this.state.values[0]
            }    

            values[1] = 0

            this.setState( { 
                
                displayValue: values[0], 
                operation: finishMath ? null : operation,
                indexArray: finishMath ? 0 : 1,
                clearDisplay : !finishMath,
                values  
            
            })
        } 

    }

    addDigit (number) {
        
        if (number === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + number
        this.setState({ displayValue, clearDisplay : false})


        if (number !== '.') {
            const i = this.state.indexArray
            const values = [ ...this.state.values]
            values[i] = parseFloat(displayValue).toFixed(2)
            this.setState( { values })
        }
    }

    clearDisplay () {
        this.setState({ ...inicialState })
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
            
                <Display value = {this.state.displayValue} />
                <Button click = {this.clearDisplay} treecolumns label = 'AC'/>
                <Button click = {this.setOperation} operator label = '/'/>
                <Button click = {this.addDigit} label = '7'/>
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