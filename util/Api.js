// const res = await fetch(`https://7376-44-223-2-238.ngrok-free.app/api/licencia/${codlincencia}` , {
//const APIH = "http://10.0.2.2:4000/api/history";

import axios from 'axios';

const API = "https://dashdesit-e4022df63ef8.herokuapp.com/api/licencia";
const APIG = "https://dashdesit-e4022df63ef8.herokuapp.com/api/licenciaCod/";
const APU = "https://dashdesit-e4022df63ef8.herokuapp.com/api/licencia";
const APIH = "https://dashdesit-e4022df63ef8.herokuapp.com/api/history"; 
 
export const getLicencia = async () => (await axios.get(`${API}`)
                                    .catch(error => console.log(error)));

export const getLicenciaId = async (codlincencia) => await (axios.get(`${APIG}` + `${codlincencia}`)
                                    .catch(error => console.log(error))
);

export const updateLicencia = (id, licencias) => axios.put(`${APU}` + '/' + `${id}`, licencias);

export const savePost = async (newPost) => await axios.post(`${APIH}`, newPost);

