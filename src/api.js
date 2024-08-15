
import axios from 'axios';

const API_KEY = process.env.REACT_APP_DOG_API_KEY;
const API_URL = 'https://api.thedogapi.com/v1/images/search?limit=10'; // Ajuste o limite conforme necessário

export const fetchAnimals = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
  
    const animals = response.data.map(animal => ({
      id: animal.id,
      name: 'Unknown', 
      age: 'Unknown',  
      breed: 'Unknown', 
      photo: animal.url,
    }));
    return animals;
  } catch (error) {
    console.error('Error fetching animals:', error);
    throw error;
  }
};
