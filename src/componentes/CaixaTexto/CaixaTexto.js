import React from "react";
import './CaixaTexto.css';
const CampoTexto = (produto) => {
    const isEnter = (evento) => {
        produto.isAlter(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label> {produto.label} </label>
            <input onChange={isEnter} placeholder={produto.placeholder} type={produto.type} />
        </div>
    )
}
export default CampoTexto;