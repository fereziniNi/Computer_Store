import React from "react";
import "./Produto.css";

const marcaImagens = {
    'HP': '/img/marcas/hp.png',
    'Dell': '/img/marcas/dell.png',
    'Positivo': '/img/marcas/positivo.png',
    'Asus': '/img/marcas/asus.png',
    'Xing Ling Genérico': '/img/marcas/xing_ling.png'
};

const Produto = ({ nome, marca, preco, estado }) => {
    const imagem = marcaImagens[marca];
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={imagem} alt={nome} />
            </div>

            <div className="rodape">
                <h4>NOME: {nome}</h4>
                <h5>PREÇO: R${preco}</h5>
                <h5>ESTADO: {estado}</h5>
            </div>
        </div>
    );
};

export default Produto;