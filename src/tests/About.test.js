import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

// informaçoes do about
describe('Testando a Página About', () => {
  test('Teste se a página contém as informações sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const info = (
      /One can filter Pokémons by type, and see more details for each one of them/i);
    const infopokedex = screen.getByText(info);
    expect(infopokedex).toBeInTheDocument();
  });

  // verifica texto do h2
  test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const heading2 = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(heading2).toBeInTheDocument();
  });

  // verifica se há 2 paragrafos com texto sobre pokedex
  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const tagpText = (
      /this application simulates a Pokédex, a digital encyclopedia containing /i);
    const textp2 = (
      /one can filter Pokémons by type, and see more details for each one of them/i);

    const text1 = screen.getByText(tagpText);
    const text2 = screen.getByText(textp2);
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  // verifica a URL e a imagem
  test('Testa se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img', { name: /pokédex/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(URL);
  });
});
