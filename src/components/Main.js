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

  // Карточки
  const [cards, setCards] = React.useState([]);

  // Контекст
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    const changeLike = isLiked ? api.unlikeCard(card._id) : api.likeCard(card._id)
    changeLike.then((newCard) => {
    // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    // Обновляем стейт
    setCards(newCards);
  });
  }

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
          {cards.map((card) => <Card  
            key={card._id} 
            card={card} 
            onCardClick={onCardClick}
            onCardLike={handleCardLike}/>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;