import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import PokemonCard from './PokemonCard';
import { PokemonContext } from '../Context/Context';

export default function UserDashboard() {
  const { googleUserData, userGoogleId } = useContext(PokemonContext)
  // let favoritePokemonCards = JSON.parse(localStorage.getItem(userGoogleId))
  const profileImg = googleUserData.profileObj.imageUrl;
  const userName = googleUserData.profileObj.name;
  const userEmail = googleUserData.profileObj.email;

  const secondAppStore = JSON.parse(localStorage.getItem("second-app-store"))
  const userObject = secondAppStore.userInfo.filter((user) => user.googleId === userGoogleId);
  const favoritePokemonCards = userObject[0].favoritePokemon;

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  }

  console.log(userObject);
  return (
    <div>
      <nav className='user-dashboard__container'>
        <h1 className='user-dashboard__title'>User Dashboard</h1>
          <span onClick={handleGoToHome} className='user-dashboard__home-link'>Home</span>
          <img className='user-dashboard__profile-img' src={profileImg} alt="user image" />
          <span className='user-dashboard__information'>
          <span className='user-dashboard__user-name'>{userName}</span>
          <span className='user-dashboard__user-email'>{userEmail}</span>
        </span>
      </nav>
      <div className='cardList'>
          {favoritePokemonCards && (
            favoritePokemonCards.map((card) => 
            <PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} hideDeleteButton={false} />
            )
          )}
      </div>
    </div>
  )
}