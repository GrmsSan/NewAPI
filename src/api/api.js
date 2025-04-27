import axios from 'axios';

export const apiDragonBall = axios.create({
    baseURL: 'https://dragonball-api.com/api',
})