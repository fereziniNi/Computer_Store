import React from "react";
import './Select.css';
const Select = (props) => {
    const isChoose = (evento) => {
        props.isAlter(evento.target.value)
    }
    return (
        <div className="select">
            <label>{props.label}</label>
            <select onChange={isChoose} value={props.value}>
                <option value="" disabled>Selecione uma opção</option>
                {props.itens.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default Select;