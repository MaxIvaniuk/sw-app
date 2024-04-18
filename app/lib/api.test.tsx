import axios from 'axios';
import { getHeroes, getHero, getFilmById, getStarshipById } from './api';
import MockAdapter from 'axios-mock-adapter';
const BASE_URL = 'https://sw-api.starnavi.io'

// Create mock obj
const mock = new MockAdapter(axios);

describe('getHeroes', () => {
    it('fetch heroes from the API', async () => {
      // fake responce
      const fakeResponse = { results: [{ name: 'Luke Skywalker', id: '10' }, { name: 'Leia Organa', id: '11' }] };
      mock.onGet(`${BASE_URL}/people?page=1`).reply(200, fakeResponse);
      const data = await getHeroes({ pageParam: 1 });
      expect(data).toEqual(fakeResponse);
    });
  
    it('throws an error if the request fails', async () => {
      // setup fake response with error 
      mock.onGet(`${BASE_URL}/people?page=1`).reply(500);
      await expect(getHeroes({ pageParam: 1 })).rejects.toThrow();
    });
});

describe('getHero', () => {
    it('fetch hero from the API', async () => {
      const fakeResponse = {
        name: 'Luke Skywalker', 
        height: '180', 
        mass: '65', 
        films: ['1', '2', '3'],
        starships: ['12', '21', '32'], 
        birth_year: 'YB65'
      };
      mock.onGet(`${BASE_URL}/people/1`).reply(200, fakeResponse);
      const data = await getHero('1');
      expect(data).toEqual(fakeResponse);
    });
  
    it('throws an error if the request fails', async () => {
        mock.onGet(`${BASE_URL}/people/1`).reply(500);
      await expect(getHero('1')).rejects.toThrow();
    });
});

describe('getFilmById', () => {
    it('fetch hero from the API', async () => {
      const fakeResponse = {
        episode_id: '1',
        title: 'Episode 1',
        producer: 'Hubba Bubba',
        opening_crawl: 'Long text crawl'
      };
      mock.onGet(`${BASE_URL}/films/1`).reply(200, fakeResponse);
      const data = await getFilmById(1);
      expect(data).toEqual(fakeResponse);
    });
  
    it('throws an error if the request fails', async () => {
      mock.onGet(`${BASE_URL}/films/1`).reply(500);
      await expect(getFilmById(1)).rejects.toThrow();
    });
});

describe('getStarshipById', () => {
    it('fetch film from the API', async () => {
        const fakeData = {
            name: 'Spaceship',
            model: 'ID-123',
            starship_class: 'funny ship'
        }
        mock.onGet(`${BASE_URL}/starships/1`).reply(200, fakeData);
        const data = await getStarshipById(1);
        expect(data).toEqual(fakeData)
    })
    it('throws an error if the request fails', async () => {
      mock.onGet(`${BASE_URL}/starships/1`).reply(500);
      await expect(getStarshipById(1)).rejects.toThrow();
    });
})