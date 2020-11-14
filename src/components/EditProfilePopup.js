import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {
  const [name, setName] = React.useState();
  const [description, setDescription ] = React.useState();


  function handleSubmit() {

  }

  return (
    <PopupWithForm 
        name="edit"
        title="Редактировать профиль"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}>
          <input 
            minLength="2" 
            maxLength="40" 
            type="text" 
            className="popup__input popup__input_name_name" 
            name="name" 
            id="name-input" 
            placeholder="Имя" 
            defaultValue="Максим Хорс" 
            onChange={(evt) => {
                setName(evt.target.value);
              }}
            required
            value={name} />
          <span 
            className='popup__input-error popup__input-error_active' 
            id='name-input-error' />
          <input 
            minLength="2" 
            maxLength="200" 
            type="text" 
            className="popup__input popup__input_name_profession" 
            name="profession" 
            placeholder="Вид деятельности" 
            id="profession-input" 
            defaultValue="Конный спортсмен" 
            onChange={(evt) => {
                setDescription(evt.target.value);
              }}
            required
            value={description} />
          <span 
            className='popup__input-error popup__input-error_active' 
            id='profession-input-error' />
          <input 
            type="submit" 
            className="popup__button-save" 
            defaultValue="Сохранить" 
            name="submit" />
        </PopupWithForm>
  );
}

export default EditProfilePopup;