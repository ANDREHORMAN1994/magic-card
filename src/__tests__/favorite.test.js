const { saveFavoriteMagicCard } = require('../magic');
let favoriteCards = require('../data/favoriteCards');

const newListCards = [...favoriteCards];

const restoreFavoriteCards = () => {
  // implemente seu código aqui
  favoriteCards = newListCards;
};

jest.setTimeout(10000);

describe('3 - Testes da função saveFavoriteMagicCard', () => {
  afterEach(restoreFavoriteCards);

  it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
    // implemente seus testes aqui

    expect(favoriteCards.length).toBe(4);

    await saveFavoriteMagicCard('130553');

    expect(favoriteCards.length).toBe(5);
  });

  it('3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect(favoriteCards).toHaveLength(4);
  });
});

describe('4 - Testes da função saveFavoriteMagicCard', () => {
  it(`4.1 Implemente um teste que verifique que o array que você obteve com o map
  contém todos os quatro nomes iniciais nomes`, async () => {
    // implemente seus testes aqui
    const charactersNames = favoriteCards.map(({ name }) => name);
    const expectedList = [
      'Ancestor\'s Chosen',
      'Angel of Mercy',
      'Aven Cloudchaser',
      'Ballista Squad',
    ];
    
    expect(charactersNames).toEqual(expectedList);
  });
});
