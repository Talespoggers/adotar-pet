
import React, { useState, useEffect } from 'react';
import { fetchAnimals } from '../api';
import AnimalCard from './AnimalCard';
import './AnimalList.css';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const data = await fetchAnimals();
        setAnimals(data);
      } catch (error) {
        console.error('Failed to load animals:', error);
      }
    };

    loadAnimals();
  }, []);

  return (
    <div className="animal-list">
      {animals.map(animal => (
        <AnimalCard
          key={animal.id}
          animal={animal}
        />
      ))}
    </div>
  );
};

export default AnimalList;
