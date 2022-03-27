import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithRouter = (component) => {
  const history = createMemoryHistory(); // criando o histórico e passando como uma propiedade

  return ({
    // os 3 ... significa prof disse que tem no render vai ser mantido
    ...render(<Router history={ history }>{component}</Router>),
    history,
  });
};

// tirando o componente fixo para dinamico passar como parametro
export default renderWithRouter;
