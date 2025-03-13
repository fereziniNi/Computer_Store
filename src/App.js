import React, { useState } from "react";
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Area from './componentes/Area/Area';

function App() {

  const secoes = [
    {
      nome: 'Computadores',
      corPrimaria: '#856490',
    },
    {
      nome: 'Acessórios',
      corPrimaria: '#977aa0',
    },
    {
      nome: 'Impressoras',
      corPrimaria: '#a891b0',
    },
    {
      nome: 'Games',
      corPrimaria: '#b9a7bf',
    },
    {
      nome: 'Gadgets',
      corPrimaria: '#cbbdcf',
    }
  ]

  const marca = [
    'HP',
    'Dell',
    'Positivo',
    'Asus',
    'Xing Ling Genérico'
  ]

  const listaSecoes = secoes.map(area => area.nome);
  const [produtos, setProdutos] = useState([]);

  const adicionaProduto = (prod) => {
    const listaNova = produtos.slice();
    listaNova.push(prod)
    setProdutos(listaNova)
  }

  return (
    <div className="tela">
      <Banner />
      <Formulario secao={listaSecoes} marca={marca} isProductRegister={adicionaProduto} />
      {
        secoes.map(area => (
          <Area
            key={area.nome}
            nome={area.nome}
            corPrimaria={area.corPrimaria}
            corSecundaria={area.corSecundaria}
            produtos={produtos.filter(prod => prod.secao === area.nome)}
          />
        ))
      }

    </div >
  );
}

export default App;
