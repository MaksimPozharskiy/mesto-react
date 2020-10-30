import React from 'react';

import editAvatar from '../images/editAvatar.svg';
import api from '../utils/api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

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


      <template id="grid-item">
        <li className="grid-item">
          <img src="./images/delete-icon.svg" alt="" className="grid-item__delete-icon" />
          <img src="#" alt="" className="grid-item__image" />
          <div className="grid-item__wrap">
            <h3 className="grid-item__name">#</h3>
            <div className="grid-item__like-container">
              <svg className='grid-item__like' width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M19.154 9.33822C21.294 7.19832 21.294 3.72364 19.154 1.60492C17.014 -0.534975 13.5392 -0.534975 11.3992 1.60492L10.361 2.66428L9.32276 1.62611C7.18277 -0.534975 3.70792 -0.534975 1.58911 1.60492C0.550891 2.64309 0 4.02026 0 5.48217C0 6.94408 0.572079 8.32124 1.58911 9.35941L10.361 18.1309L19.154 9.33822Z" />
              </svg>
              <p className="grid-item__like-counter">1</p>
            </div>
          </div>
        </li>
      </template>

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
          {cards.map(({_id, ...props}) => {
            return (
              <li className="grid-item" key={_id}>
                <img src="./images/delete-icon.svg" alt="Удаление карточки" className="grid-item__delete-icon" />
                <img src={props.link} alt={props.name} className="grid-item__image" />
                <div className="grid-item__wrap">
                  <h3 className="grid-item__name">{props.name}</h3>
                  <div className="grid-item__like-container">
                    <svg className='grid-item__like' width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path  d="M19.154 9.33822C21.294 7.19832 21.294 3.72364 19.154 1.60492C17.014 -0.534975 13.5392 -0.534975 11.3992 1.60492L10.361 2.66428L9.32276 1.62611C7.18277 -0.534975 3.70792 -0.534975 1.58911 1.60492C0.550891 2.64309 0 4.02026 0 5.48217C0 6.94408 0.572079 8.32124 1.58911 9.35941L10.361 18.1309L19.154 9.33822Z" />
                    </svg>
                    <p className="grid-item__like-counter">{props.likes.length}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;