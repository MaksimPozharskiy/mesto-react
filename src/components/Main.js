import avatar from '../images/avatar.jpg';
import editAvatar from '../images/editAvatar.svg';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className="content">
      <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-wrapp">
              <img src={avatar} alt="Аватар профиля" className="profile__avatar" />
              <img src={editAvatar} alt="Смена аватара" className="profile__avatar-edit" onClick={onEditAvatar}/>
            </div>
            <div className="profile__info">
              <div className="profile__wrap">
                <h1 className="profile__name">Максим Хорс</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__profession">Конный спортсмен</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="photos">
        <ul className="grid-photos"></ul>
      </section>
    </main>
  );
}

export default Main;