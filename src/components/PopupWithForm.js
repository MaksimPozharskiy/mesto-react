function PopupWithForm({name, title, chldren, isOpen, onClose}) {

  return (
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <h4 className="popup__title">{title}</h4>
          <form className="popup__form" name={name} noValidate>
            {chldren}
          </form>
          <button type="button" className="popup__button-close" onClick={onClose}></button>
        </div>
      </div>
  );
}

export default PopupWithForm;