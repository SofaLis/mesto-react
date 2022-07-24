
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      name: card.name
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm buttonText={'Сохранить'} name={`user`} title={`Редактировать профиль`} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="name-input" className="popup__item popup__item_name" name="name" placeholder="Имя" required maxLength="40" minLength="2"></input>
        <span className="popup__input-error name-input-error">Ошибка ввода</span>
        <input type="text" id="job-input" className="popup__item popup__item_job" name="about" placeholder="О себе" required maxLength="200" minLength="2"></input>
        <span className="popup__input-error job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm buttonText={'Создать'} name={`cards`} title={`Новое место`} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="card-name-input" className="popup__item popup__item_card_name" name="name" placeholder="Название" required maxLength="30" minLength="2"></input>
        <span className="popup__input-error card-name-input-error"></span>
        <input type="url" id="card-link-input" className="popup__item popup__item_card_link" name="link" placeholder="Ссылка на картинку" required></input>
        <span className="popup__input-error card-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm buttonText={'Сохранить'} name={`avatar`} title={`Обновить аватар`} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" id="avatar-input" className="popup__item popup__item_name" name="avatar" placeholder="Ссылка на картинку" required></input>
        <span className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>

      <PopupWithForm buttonText={'Да'} name={`delete`} title={`Вы уверены?`}>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
