function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__wrap">
        <img src="#" alt="" className="popup__image" />
        <p className="popup__title-image"></p>
        <button type="button" className="popup__button-close"></button>
      </div>
    </div>
  );
}

export default ImagePopup;