import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  // verifa mensagem caso nao tenha poke favorito
  test('verifica na tela a mensagem :no favorite pokemon found.', () => {
    renderWithRouter(<FavoritePokemons />);
    const msg = screen.getByText(/no favorite pokemon found/i);
    expect(msg).toBeInTheDocument();
  });

  // exiba os cards
  // informaçoes no data
  test('se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(
      <FavoritePokemons pokemons={ pokemons } />,
    );
    pokemons.forEach((pokemon) => {
      const namePokemon = screen.getByText(pokemon.name);
      expect(namePokemon).toBeInTheDocument();
      screen.logTestingPlaygroundURL();
    });
  });
});
