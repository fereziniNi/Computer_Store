import React from "react";
import './Lista.css';
const Lista = (props) => {
    return (
        <div className="lista">
            <h2>Lista de Professores</h2>
            {props.objetos.map((objeto, index) => (
                <div key={index}>
                    <strong>Nome:</strong> {objeto.titulo} {objeto.nome} ({objeto.area})<br />
                    <strong>Imagem:</strong> {objeto.imagem}<br />
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default Lista;