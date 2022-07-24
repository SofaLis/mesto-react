
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
console.log('f')

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

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

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name={`user`} title={`Редактировать профиль`} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="name-input" className="popup__item popup__item_name" name="name" placeholder="Имя" required maxLength="40" minLength="2"></input>
        <span className="popup__input-error name-input-error">Ошибка ввода</span> 
        <input type="text" id="job-input" className="popup__item popup__item_job" name="about" placeholder="О себе" required maxLength="200" minLength="2"></input>
        <span className="popup__input-error job-input-error"></span>
        <button type="submit" className="popup__submit-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name={`cards`} title={`Редактировать профиль`} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="card-name-input" className="popup__item popup__item_card_name" name="name" placeholder="Название" required maxLength="30" minLength="2"></input>
        <span className="popup__input-error card-name-input-error"></span> 
        <input type="url" id="card-link-input" className="popup__item popup__item_card_link" name="link" placeholder="Ссылка на картинку" required></input> 
        <span className="popup__input-error card-link-input-error"></span> 
        <button type="submit" className="popup__submit-button">Создать</button>
      </PopupWithForm>

      <PopupWithForm name={`avatar`} title={`Обновить аватар`} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" id="avatar-input" className="popup__item popup__item_name" name="avatar" placeholder="Ссылка на картинку" required></input> 
        <span className="popup__input-error avatar-input-error"></span> 
        <button type="submit" className="popup__submit-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name={`delete`} title={`Вы уверены?`}>
        <button type="submit" className="popup__submit-button">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
