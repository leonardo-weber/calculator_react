import React from "react";
import reactDom from "react-dom";
import '../src/index.css'
import Calculator from './componentes/calculator'


reactDom.render(<div> <h1> Calculadora </h1><Calculator /> </div>, document.getElementById('root'))