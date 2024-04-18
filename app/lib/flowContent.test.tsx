import { generateUserNodes, generateMovieNodes, generateStarshipsNodes, generateHeroMovieEdges, generateMovieShipEdges } from './flowContent';

describe('generateUserNodes', () => {
  test('should return an array with one node containing user data', () => {
    // Arrange
    const user = 'Luke Skywalker';
    const height = '172';
    const mass = '77';
    const id = '1';
    const birth_year = '19BBY';

    // Act
    const result = generateUserNodes(user, height, mass, id, birth_year);

    // Assert
    expect(result).toHaveLength(1); // Checking the result is an array with one element
    expect(result[0]).toEqual({ // Checking the first element of the array has the correct properties
      id: 'hero',
      type: 'heroCustom',
      data: {
        name: user,
        height,
        mass,
        id,
        birth_year,
      },
      position: { x: 0, y: 0 },
    });
  });
});


describe('generateMovieNodes', () => {
  it('returns an empty array when provided an empty array of movies', () => {
    const moviesId: string[] = [];
    const nodes = generateMovieNodes(moviesId);
    expect(nodes).toEqual([]);
  });

  it('returns an array of nodes with correct ids when provided an array of movies', () => {
    const moviesId: string[] = ['1', '2', '3'];
    const nodes = generateMovieNodes(moviesId);
    const expectedNodes = [
      { id: 'mov-1', type: 'movieCustom', data: { id: '1' }, position: { x: 200, y: 500 } },
      { id: 'mov-2', type: 'movieCustom', data: { id: '2' }, position: { x: 800, y: 500 } },
      { id: 'mov-3', type: 'movieCustom', data: { id: '3' }, position: { x: 1400, y: 500 } },
    ];
    expect(nodes).toEqual(expectedNodes);
  });
});

describe('generateStarshipsNodes', () => {
  it('returns an empty array when provided an empty array of starships', () => {
    const starships: string[] = [];
    const nodes = generateStarshipsNodes(starships);
    expect(nodes).toEqual([]);
  });

  it('returns an array of nodes with correct ids when provided an array of starships', () => {
    const starships: string[] = ['ship1', 'ship2', 'ship3'];
    const nodes = generateStarshipsNodes(starships);
    const expectedNodes = [
      { id: 'ship-ship1', type: 'starshipCustom', data: { id: 'ship1' }, position: { x: 400, y: 1500 } },
      { id: 'ship-ship2', type: 'starshipCustom', data: { id: 'ship2' }, position: { x: 1000, y: 1500 } },
      { id: 'ship-ship3', type: 'starshipCustom', data: { id: 'ship3' }, position: { x: 1600, y: 1500 } },
    ];
    expect(nodes).toEqual(expectedNodes);
  });
});

describe('generateHeroMovieEdges', () => {
  it('returns an empty array when provided an empty array of movies', () => {
    const movies: string[] = [];
    const edges = generateHeroMovieEdges(movies);
    expect(edges).toEqual([]);
  });

  it('returns an array of edges with correct ids when provided an array of movies', () => {
    const movies: string[] = ['1', '2', '3'];
    const edges = generateHeroMovieEdges(movies);
    const expectedEdges = [
      { id: 'hm-1', source: 'hero', target: 'mov-1', type: 'default' },
      { id: 'hm-2', source: 'hero', target: 'mov-2', type: 'default' },
      { id: 'hm-3', source: 'hero', target: 'mov-3', type: 'default' },
    ];
    expect(edges).toEqual(expectedEdges);
  });
});

describe('generateMovieShipEdges', () => {
  it('returns an empty array when provided empty arrays of movies and starships', () => {
    const movieArr: string[] = [];
    const shipArr: [] = [];
    const edges = generateMovieShipEdges(movieArr, shipArr);
    expect(edges).toEqual([]);
  });

  it('returns an array of edges with correct ids when provided arrays of movies and starships', () => {
    const movieArr: string[] = ['1', '2', '3'];
    const shipArr: string[] = ['a', 'b', 'c'];
    const edges = generateMovieShipEdges(movieArr, shipArr);
    const expectedEdges = [
      { id: 'ms-1', source: 'mov-1', target: 'ship-a', type: 'default' },
      { id: 'ms-2', source: 'mov-2', target: 'ship-b', type: 'default' },
      { id: 'ms-3', source: 'mov-3', target: 'ship-c', type: 'default' },
    ];
    expect(edges).toEqual(expectedEdges);
  });

  it('returns an array of edges with correct ids when provided arrays of different lengths', () => {
    const movieArr: string[] = ['1', '2'];
    const shipArr: string[] = ['a', 'b', 'c'];
    const edges = generateMovieShipEdges(movieArr, shipArr);
    const expectedEdges = [
      { id: 'ms-1', source: 'mov-1', target: 'ship-a', type: 'default' },
      { id: 'ms-2', source: 'mov-2', target: 'ship-b', type: 'default' },
    ];
    expect(edges).toEqual(expectedEdges);
  });
});