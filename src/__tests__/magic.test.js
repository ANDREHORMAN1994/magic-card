const { getMagicCard } = require('../magic');
require('../../startest/mockSetup');

jest.setTimeout(10000);

// const expectedValue = {
//   name: 'Ancestor\'s Chosen',
//   manaCost: '{5}{W}{W}',
//   types: ['Creature'],
//   subtypes: ['Human', 'Cleric'],
//   rarity: 'Uncommon',
// };

let data = {};

describe('1 - Testes da função getMagicCard', () => {
  beforeEach(async () => {
    await getMagicCard('130550');
  });

  it('1.1 Verifique se getMagicCard é uma função.', async () => {
    expect(typeof getMagicCard).toBe('function');
    
    // const data = await getMagicCard('130550');
    // console.log(data);

    // expect(data).toEqual(expectedValue);
  });

  it('1.2 Verifique se a função fetch foi chamada.', async () => {
    // await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.magicthegathering.io/v1/cards/130550';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.magicthegathering.io/v1/cards/130550';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
});

describe('2 - Testando o retorno da função getMagicCard', () => {
  beforeEach(async () => {
    const response = await getMagicCard('130550');
    data = response;
  });

  it('2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.', async () => {
    // const response = await getMagicCard('130550');
    expect(data.name).toBe('Ancestor\'s Chosen');
  });
});