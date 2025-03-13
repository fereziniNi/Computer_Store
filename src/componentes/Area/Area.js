import React from "react";
import './Area.css';
import Produto from "../Produto/Produto";

const Area = (produto) => {
    const corDeFundo = { backgroundColor: produto.corPrimaria }

    return (
        (produto.produtos.length > 0) ? <section className="area" style={corDeFundo} >
            <h3>{produto.nome}</h3>
            <div className="produtos">
                {produto.produtos.map(prod => <Produto
                    key={prod.nome}
                    nome={prod.nome}
                    marca={prod.marca}
                    secao={prod.secao}
                    preco={prod.preco}
                    estado={prod.estado}
                />)}
            </div>
        </section >
            : ' '
    )
}
export default Area;