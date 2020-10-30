import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} />
        <Footer />
      </div>

      <PopupWithForm 
        name="edit"
        title="Редактировать профиль"
        children=""
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}  />
      <PopupWithForm 
        name="add"
        title="Новое место"
        children=""
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}  />
      <PopupWithForm 
        name="avatar"
        title="Обновить аватар"
        children=""
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}  />
        
    </>
  );
}

export default App;
