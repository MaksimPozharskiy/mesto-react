import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
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

  function handleUpdateUser({name, about}) {
    api.editUserInfo(name, about).then(() => {
      const updatedUser = { ...currentUser };
        updatedUser.name = name;
        updatedUser.about = about;

        setCurrentUser({ ...updatedUser });
      setIsEditProfilePopupOpen(false);
    });
  }

  function handleUpdateAvatar({avatar}) {
    api.editUserAvatar(avatar).then((updatedUser) => {
      setCurrentUser(updatedUser);
      setIsEditAvatarPopupOpen(false);
    })
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
      {currentUser &&
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
          /> 
      }
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
        {currentUser &&
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}   
          /> 
        }
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
