import axios from 'axios';

// Define la URL base
const API_URL = "https://desit-server-staging-2dab81ac495c.herokuapp.com/api/v1/user";

// Función para hacer un POST
export const postUserData = async (data) => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'application/json', // Configura los headers, si es necesario
      },
    });

    return response.data; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error("Error en el POST", error);
    throw error; // Lanza el error para manejarlo fuera de la función si es necesario
  }
};
