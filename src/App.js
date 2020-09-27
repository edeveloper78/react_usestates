import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
import Produto from "./Produto";

function App() {
  const [modal, setModal] = React.useState(false);
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["item 1"]);
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  function handleClick() {
    setContar((contar) => contar + 1);
    setItems((items) => [...items, "Item" + (contar + 1)]);
  }
  async function buscarProdutos(event) {
    setCarregando(true);
    const produto = event.target.innerText;
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/" + produto
    );

    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
      <p></p>

      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
      <p></p>
      <p></p>
      <p></p>
      <button style={{ margin: ".5rem" }} onClick={buscarProdutos}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={buscarProdutos}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={buscarProdutos}>
        tablet
      </button>
      <div>
        {carregando ? "Carregando" : ""}
        {dados && !carregando ? <Produto dados={dados} /> : ""}
      </div>
    </div>
  );
}

export default App;
