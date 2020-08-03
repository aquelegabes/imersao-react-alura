import React, { useState } from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const categoriaDefault = {
    nome: "",
    descricao: "",
    cor: "#000",
  };
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(categoriaDefault);

  function setValueCategoria(chave, valor) {
    setCategoria({
      ...categoria,
      [chave]: valor,
    });

    setValueCategoria(categoriaDefault);
  }

  function handleCategoriaProperty(e) {
    const targetName = e.target.getAttribute("name");
    const targetValue = e.target.value;
    setValueCategoria(targetName, targetValue);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria.nome}</h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([...categorias, categoria]);
        }}
      >
        <FormField
          label="Nome da categoria: "
          name="nome"
          type="text"
          value={categoria.nome}
          onChange={handleCategoriaProperty}
        />
        <FormField
          label="Descrição da categoria:"
          name="descricao"
          type="textarea"
          value={categoria.descricao}
          onChange={handleCategoriaProperty}
        />
        <FormField
          label="Cor da categoria: "
          name="cor"
          type="color"
          value={categoria.cor}
          onChange={handleCategoriaProperty}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((cat, index) => (
          <li key={index}>
            {cat.nome} & {index}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
