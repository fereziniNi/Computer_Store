import React, { useState } from "react";
import './Formulario.css';

import Select from '../Select/Select';
import CaixaTexto from '../CaixaTexto/CaixaTexto';
import RadioGroup from '../RadioGroup/RadioGroup';
import Botao from '../Botao/Botao';

const Formulario = ({ secao, marca, isProductRegister }) => {
    const [nome, setNome] = useState('');
    const [secaoSelecionada, setSecao] = useState('');
    const [marcaSelecionada, setMarca] = useState('');
    const [preco, setPreco] = useState('');
    const [estado, setEstado] = useState('');

    const isSave = (evento) => {
        evento.preventDefault();
        console.log("Form foi submetido => ", secaoSelecionada, marcaSelecionada, nome, preco, estado);
        isProductRegister({
            secao: secaoSelecionada,
            marca: marcaSelecionada,
            nome: nome,
            preco: preco,
            estado: estado
        });
    };

    return (
        <section className="formulario">
            <form onSubmit={isSave}>
                <h2>Insira o Produto:</h2>

                <Select
                    label="Secao: "
                    itens={secao}
                    isAlter={(valor) => setSecao(valor)}
                    value={secaoSelecionada}
                />

                <Select
                    label="Marca: "
                    itens={marca}
                    isAlter={(valor) => setMarca(valor)}
                    value={marcaSelecionada}
                />


                <CaixaTexto
                    label="Nome: "
                    placeholder="Digite o nome do produto: "
                    isAlter={(valor) => setNome(valor)}
                />

                <CaixaTexto
                    label="Preço: "
                    placeholder="Digite o preço do produto: "
                    isAlter={(valor) => setPreco(valor)}
                />

                <RadioGroup
                    label="Estado: "
                    isAlter={(valor) => setEstado(valor)}
                />

                <Botao texto="Adicionar" />
            </form>
        </section>
    );
};

export default Formulario;