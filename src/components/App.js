import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    api.getUserInfo().then(data => setCurrentUser(data));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        {currentUser && // Рендерим элемент только после того как пришел ответ от React.useEffect
          <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick} /> 
        }
        <Footer />
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} /> 
      <PopupWithForm 
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input 
            minLength="1" 
            maxLength="30" 
            type="text" 
            placeholder="Название" 
            className="popup__input popup__input_name_title-card" 
            name="title-card" 
            id="title-input" 
            required />
          <span 
            className='popup__input-error' 
            id='title-input-error'>Вы пропустили это поле.</span>
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            className="popup__input popup__input_name_link-card" 
            name="link-card" 
            id="link-input" 
            required />
          <span 
            className='popup__input-error' 
            id='link-input-error'>Вы пропустили это поле.</span>
          <input 
            type="submit" 
            className="popup__button-save" 
            value="Создать" 
            name="submit" />
        </PopupWithForm>
      <PopupWithForm 
        name="avatar"
        title="Обновить аватар"
        children=""
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            className="popup__input popup__input_name_link-avatar" 
            name="avatar-input" 
            id="avatar-input" 
            required />
          <span 
            className='popup__input-error' 
            id='avatar-input-error'>Заполните это поле.</span>
          <input 
            type="submit" 
            className="popup__button-save" 
            value="Сохранить" 
            name="submit" />
        </PopupWithForm>
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
