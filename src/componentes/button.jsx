import react from 'react'
import './button.css'

export default props => {
    return <button className = {`button 
    ${props.operator ? 'operators' : ''}
    ${props.twocolumns ? 'twocolumns' : ''}
    ${props.treecolumns ? 'treecolumns' : ''} `} 
    
    > {props.label} </button>
}