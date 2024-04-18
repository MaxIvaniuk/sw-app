// generating react flow nodes

export const generateUserNodes = (user: string, height: string, mass: string, id: string, birth_year: string) => {
    return [{ id: 'hero', type: 'heroCustom', data: { name: user, height, mass, id, birth_year }, position: { x: 0, y: 0 } }]
}

export const generateMovieNodes = (movies: string[]) => {
    return movies.map((movie, i) => { 
        return { id: `mov-${movie}`, type: 'movieCustom', data: { id: movie }, position: { x: 200 + i * 600, y: 500 } }
    })
}

export const generateStarshipsNodes = (starships: string[]) => {
    return starships.map((item, i) => { 
        return { id: `ship-${item}`, type: 'starshipCustom', data: { id: item }, position: { x: 400 + i * 600, y: 1500 } }
    })
}

// generating react flow edges

export const generateHeroMovieEdges = (movies: string[]) => {
    return movies.map((item, i) => {
        return { id: `hm-${item}`, source: 'hero', target: `mov-${item}`, type: 'default' }
    })
}

export const generateMovieShipEdges = (movArr: string[], shipArr: string[]) => {
    const edges = [];

    const minLength = Math.min(movArr.length, shipArr.length);

    for (let i = 0; i < minLength; i++) {
        edges.push({ id: `ms-${i+1}`, source: `mov-${movArr[i]}`, target: `ship-${shipArr[i]}`, type: 'default' });
    }
    return edges;
}


  
  