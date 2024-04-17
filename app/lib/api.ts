import axios from "axios";
const baseUrl = 'https://sw-api.starnavi.io'

export async function getHeroes({ pageParam = 1 }) {
    return await axios.get(`${baseUrl}/people?page=${pageParam}`)
    .then( res => res.data )
    .catch( err => {throw err} )
}

export async function getHero(id: number | string) {
    return await axios.get(`${baseUrl}/people/${id}`)
    .then( res => res.data )
    .catch( err => {throw err} )
}

export async function getFilmById(filmId: number) {
    return await axios.get(`${baseUrl}/films/${filmId}`)
    .then( res => res )
    .catch( err => {throw err} )
}

export async function getStarshipById(shipId: number) {
    return await axios.get(`${baseUrl}/starships/${shipId}`)
    .then( res => res )
    .catch( err => {throw err} )
}