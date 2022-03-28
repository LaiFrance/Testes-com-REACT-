import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import pokemon from '../data';

describe('Testando o componente Pokemon ', () => {
  test('Teste se é renderizado um card com as informações de um pokémon.', () => {
    renderWithRouter(<App />);
    // CARD COM INFORMAÇÕES DO POKEMON PIKACHU
    const namePokemon = screen.getByTestId('pokemon-name');
    const tipoPokemon = screen.getByTestId('pokemon-type');
    const pesoPokemon = screen.getByTestId('pokemon-weight');
    const imagem = screen.getByRole('img', { name: /pikachu sprite/i });
    const linkimage = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const linknavega = screen.getByRole('link', { name: /more details/i });
    // const linkid = '/pokemons/25';
    expect(namePokemon).toBeInTheDocument('Pikachu');
    expect(tipoPokemon).toHaveTextContent('Electric');
    expect(pesoPokemon).toBeInTheDocument('Average weight: 6.0 kg');
    expect(imagem).toHaveAttribute('src', linkimage);
    expect(linknavega).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(linknavega);
    screen.logTestingPlaygroundURL();
    // POKEMON FAVORITADO E STAR ICON
    const pokemonFavoritado = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(pokemonFavoritado);
    const estrela = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(estrela).toBeInTheDocument();
    expect(estrela).toHaveAttribute('src', '/star-icon.svg');
  });
});
