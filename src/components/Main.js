import React from 'react';
import Card from './Card';
import editAvatar from '../images/editAvatar.svg';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  React.useEffect(() => {
    api.getInitialCards().then(cardList => {
      setCards(cardList);
    })
  }, []);

  /* {Карточки} */
  const [cards, setCards] = React.useState([]);

  /* {Контекст} */
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-wrapp">
              <img src={`${currentUser.avatar}`} alt="Аватар профиля" className="profile__avatar" />
              <img src={editAvatar} alt="Смена аватара" className="profile__avatar-edit" onClick={onEditAvatar}/>
            </div>
            <div className="profile__info">
              <div className="profile__wrap">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile} />
              </div>
              <p className="profile__profession">{currentUser.about}</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>
    
      <section className="photos">
        <ul className="grid-photos">
          {cards.map((card) => <Card  key={card._id} card={card} onCardClick={onCardClick} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;