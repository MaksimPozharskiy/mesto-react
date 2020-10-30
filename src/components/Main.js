import React from 'react';
import Card from './Card';
import editAvatar from '../images/editAvatar.svg';
import api from '../utils/api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar)
    });

    api.getInitialCards().then(cardList => {
      setCards(cardList);
    })
  }, []);

  /* {Данные пользователя} */
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

    /* {Карточки} */
  const [cards, setCards] = React.useState([]);

  return (
    <main className="content">
      <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-wrapp">
              <img src={`${userAvatar}`} alt="Аватар профиля" className="profile__avatar" />
              <img src={editAvatar} alt="Смена аватара" className="profile__avatar-edit" onClick={onEditAvatar}/>
            </div>
            <div className="profile__info">
              <div className="profile__wrap">
                <h1 className="profile__name">{userName}</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__profession">{userDescription}</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
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