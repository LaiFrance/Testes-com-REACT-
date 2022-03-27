import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Teste o componente NotFound ', () => {
  test('verifica se a página tem um h2 com o texto: Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);
    const heading = screen.getByRole('heading',
      { level: 2, name: /page requested not found crying emoji/i });
    expect(heading).toBeInTheDocument();
  });

  test('se página mostra a imagem de um programador 😭', () => {
    renderWithRouter(<NotFound />);
    const programador = screen.getByRole('img',
      { name: /Pikachu crying because the page requested was not found/i });
    expect(programador).toBeInTheDocument();
    expect(programador.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
