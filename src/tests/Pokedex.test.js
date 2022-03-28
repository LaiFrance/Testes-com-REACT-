import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import pokemons from '../data';
// procura headingh2
describe('Teste o componente Pokedex. ', () => {
  test('se página contém um heading h2 com o texto:encountered pokémons.', () => {
    renderWithRouter(<App />);
    const heading2 = screen.getByRole('heading',
      { level: 2, name: /encountered pokémons/i });
    expect(heading2).toBeInTheDocument();
  });
});
// verifica botão proximo e o texto
describe('Teste o Botão : Proximo Pokemon. ', () => {
  test('verifica se botão tem o texto: Próximo pokémon.', () => {
    renderWithRouter(<App />);
    const btnext = screen.getByRole('button',
      { name: /próximo pokémon/i });
    expect(btnext).toBeInTheDocument();
  });
});
// verifica pokemons exibidos
test('verifica se ao clicar no botão os pokemons são exibidos de um a um', () => {
  renderWithRouter(<App />);
  const btnext = screen.getByRole('button',
    { name: /próximo pokémon/i });
  userEvent.click(btnext);
  expect(screen.getByText(/charmander/i)).toBeInTheDocument();

  userEvent.click(btnext);
  expect(screen.getByText(/caterpie/i)).toBeInTheDocument();

  userEvent.click(btnext);
  expect(screen.getByText(/ekans/i)).toBeInTheDocument();

  userEvent.click(btnext);
  expect(screen.getByText(/alakazam/i)).toBeInTheDocument();

  userEvent.click(btnext);
  expect(screen.getByText(/mew/i)).toBeInTheDocument();

  userEvent.click(btnext);
  expect(screen.getByText(/rapidash/i)).toBeInTheDocument();

  userEvent.click(btnext);
  expect(screen.getByText(/snorlax/i)).toBeInTheDocument();

  userEvent.click(btnext);
  expect(screen.getByText(/dragonair/i)).toBeInTheDocument();

  userEvent.click(btnext);
  expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
});

// verifica se é mostrado 1 pokemon por vez
test('verifica se é mostrado apenas um Pokémon por vez.', () => {
  renderWithRouter(<App />);
  const cardum = screen.getAllByTestId('pokemon-name');
  expect(cardum).toHaveLength(1);
  // screen.logTestingPlaygroundURL();
});
// verifica a filtragem do tipo e do buttons
describe('verifica se a Pokédex tem os botões de filtro.', () => {
  test('deve existir um botão de filtragem para cada tipo de Pokémon.', () => {
    renderWithRouter(<App />);
    const namesTypes = [/all/i, /electric/i, /fire/i, /bug/i, /poison/i,
      /psychic/i, /normal/i, /dragon/i];

    namesTypes.forEach((type) => {
      expect(screen.getByRole('button', { name: type })).toBeInTheDocument();
    });
  });
  // verifica o pokemon do tipo coloquei psychic é o Alakazam
  test('Verifica a seleção e se a pokedex circula pelos pokémons daquele tipo.', () => {
    renderWithRouter(<App />);
    const psychicBtn = screen.getByRole('button', { name: /psychic/i });
    userEvent.click(psychicBtn);
    const textAlakazam = screen.getAllByText(/psychic/i);
    expect(textAlakazam).toHaveLength(2);
    expect(textAlakazam[0]).toBeInTheDocument();
    /*   Received has type:  array
    Received has value: [<p data-testid="pokemon-type">Psychic</p>,
    <button class="button-text filter-button"
    data-testid="pokemon-type-button" type="button">Psychic</button>] */

    /* (If this is intentional, then use the `*AllBy*` variant of the query
     (like `queryAllByText`, `getAllByText`, or `findAllByText`)). */
  });

  // verifica se o botão tem o tipo dos outros pokemons
  test('verifica se o texto do botão tem o nome do tipo do pokemon.', () => {
    renderWithRouter(<App />);
    const buttonstypes = screen.getAllByTestId(/pokemon-type-button/i);
    expect(buttonstypes).toBeDefined();
    // screen.logTestingPlaygroundURL();
  });

  // verifica se o botão all está visivel
  test('verifica se botão All sempre visível.', () => {
    renderWithRouter(<App />);
    const allBTN = screen.getByRole('button', { name: 'All' });
    userEvent.click(allBTN);
    expect(allBTN).toBeDefined();
    screen.logTestingPlaygroundURL();
  });
  // verifica qual botão reseta o filtro
  describe('Verifica se a Pokédex contém um botão para resetar o filtro.', () => {
    test('verifica se botão All reseta o filtro.', () => {
      renderWithRouter(<App />);
      const allBTN = screen.getByRole('button', { name: /All/i });
      userEvent.click(allBTN);
      // quando clicado no All ele reseta e o primeiro poke que aparece é o pikachu
      const pokeappear = screen.getByText(/pikachu/i);
      expect(pokeappear).toBeInTheDocument();
      // screen.logTestingPlaygroundURL();
    });
  });
});
