
import React from 'react';
import './AnimalCard.css';

const AnimalCard = ({ animal }) => {
  return (
    <div className="animal-card">
      <img src={animal.photo} alt="Dog" className="animal-image" />
      <div className="animal-info">
        <h2>{animal.name || 'Nome não disponível'}</h2>
        <p>Idade: {animal.age || 'Idade não disponível'}</p>
        <p>Raça: {animal.breed || 'Raça não disponível'}</p>
        <button onClick={() => alert('Adotar clicado!')}>Adotar</button>
        <button onClick={() => alert('Informações clicado!')}>Acessar Informações</button>
      </div>
    </div>
  );
};

export default AnimalCard;
