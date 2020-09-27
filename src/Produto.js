import React from "react";

function Produto({ dados }) {
  return (
    <div>
      <p>{dados.nome}</p>
      <p>R$ {dados.preco}</p>
      <p>Descrição: {dados.descricao}</p>
      <p>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      </p>
    </div>
  );
}

export default Produto;
