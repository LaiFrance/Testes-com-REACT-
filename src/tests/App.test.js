import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando Rotas de Links', () => {
  test('Verificar se o topo da aplicação tem conjunto fixo de links', () => {
    /* const history = createMemoryHistory(); // start historico
    render(
      <Router history={ history }>
        <App />
      </Router>,
    ); */
    renderWithRouter(<App />);
    /*  // rota home / = Home
    // browserrouter ta no index.js vai ser carregado só 1x */
    // rotahome
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();

    const linkFavorites = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavorites).toBeInTheDocument();
    // screen.logTestingPlaygroundURL()
  });
});

// link da home
describe('Testando o redirecionamento correto da página ao clicar nos links', () => {
  test('teste se a aplicação é redirecionadanna URL / ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });
  // link do about
  test('teste se é redirecionadana para página About ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });
  // link do favoritePokemons
  test('teste se é redirecionada ao clicar no link Favorites Pokemons', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorites = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(linkFavorites);
    expect(history.location.pathname).toBe('/favorites');
  });
  // verifica se quando digitado uma Url DESCONHECIDA aparece um pikachu fofinho chorando
  test('test se é redirecionada para a page Not Found com uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />); // start historico
    history.push('/NotFoundeee');
    // console.log(history);
    const headingNotFound = screen.getByRole('heading',
      { level: 2, name: /page requested not found/i });
    expect(headingNotFound).toBeInTheDocument();
  });
});
