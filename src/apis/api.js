import axios from 'axios';

const request = axios.create({
    baseURL: 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json'
});


export const getParmacyList = data => request.get('', data);
