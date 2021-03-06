import React, { useContext } from 'react';
import './PokemonCard.css';
import { PokemonContext } from '../Context/Context.tsx';

interface IPokemonCardProps {
  img: string;
  name: string;
  cardId: string;
  hideDeleteButton: boolean;
}

// export default function PokemonCard({ img, name, cardId, hideDeleteButton }: IPokemonCardProps) {
export default function PokemonCard({ img, name, cardId, hideDeleteButton }: IPokemonCardProps) {
  const { handlePokemonCardChange, handlePokemonCardSave, handlePokemonCardDelete } = useContext(PokemonContext)
  return (
    <span className='pokemon-card-container'>
      {hideDeleteButton ?
        <button className='pokemon-card__save-button' name={cardId} onClick={handlePokemonCardSave}>Save</button>
        : <button className='pokemon-card__delete-button' name={cardId} onClick={handlePokemonCardDelete}>Delete</button>
      }
      <img className="pokemon-card__img" src={img} alt={name} name={cardId} onClick={handlePokemonCardChange} />
    </span>
  )
}
