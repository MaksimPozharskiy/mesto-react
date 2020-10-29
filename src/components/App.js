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


  return (
    <>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
      </div>

      <PopupWithForm 
        name="edit"
        title="Редактировать профиль"
        children=""
        isOpen={isEditProfilePopupOpen} />
      <PopupWithForm 
        name="add"
        title="Новое место"
        children=""
        isOpen={isAddPlacePopupOpen} />
      <PopupWithForm 
        name="avatar"
        title="Обновить аватар"
        children=""
        isOpen={isEditAvatarPopupOpen} />
        
    {/* Templates */}
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
    </>
  );
}

export default App;
