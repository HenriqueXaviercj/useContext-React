import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados, loading, error } = React.useContext(GlobalContext);

  return (
    <>
      {loading && <p>Carregando produtos...</p>}
      {!loading && error && <p>{error}</p>}
      {dados && !loading && !error && (
        <ul>
          <h1>Produtos:</h1>
          {dados.map((prod) => (
            <li key={prod.id}>{prod.nome}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Produto;
