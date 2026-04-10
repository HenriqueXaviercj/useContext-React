import React from 'react';
import { GlobalContext } from './GlobalContext';

const Limpar = () => {
  const { dados, setDados } = React.useContext(GlobalContext);

  function limparDados() {
    if (dados === null) return null;

    setDados(null);
  }

  return <button onClick={limparDados}>Limpar</button>;
};

export default Limpar;
