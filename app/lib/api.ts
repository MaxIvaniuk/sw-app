import axios from "axios";
const BASE_URL = 'https://sw-api.starnavi.io'

export async function getHeroes({ pageParam = 1 }) {
    return await axios.get(`${BASE_URL}/people?page=${pageParam}`)
    .then( res => res.data )
    .catch( err => {throw err} )
}

export async function getHero(id: number | string) {
    return await axios.get(`${BASE_URL}/people/${id}`)
    .then( res => res.data )
    .catch( err => {throw err} )
}

export async function getFilmById(filmId: number) {
    return await axios.get(`${BASE_URL}/films/${filmId}`)
    .then( res => res.data )
    .catch( err => {throw err} )
}

export async function getStarshipById(shipId: number) {
    return await axios.get(`${BASE_URL}/starships/${shipId}`)
    .then( res => res.data )
    .catch( err => {throw err} )
}