import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProdutos() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto/',
        );

        if (!res.ok) {
          throw new Error('Falha ao buscar produtos.');
        }

        const json = await res.json();
        setDados(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  return (
    <GlobalContext.Provider value={{ dados, setDados, loading, error }}>
      {children}
    </GlobalContext.Provider>
  );
};
