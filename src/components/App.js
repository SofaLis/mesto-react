
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCard from './DeleteCard';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCard, setIsDeleteCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', avatar: '', about: '' });
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`${err}, попробуйте ещё`);
      })
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(`${err}, попробуйте ещё`);
    })
  };

  function handleCardDelete(card){
    api.deleteCard(card._id)
    .then (res=>{
        setCards ((newCard)=> newCard.filter((item) => {return item._id !== card._id}));
    })
    .catch((err) => {
      console.log(`${err}, попробуйте ещё`);
    })
  };

  function handleDeleteCardConfirm() {
    handleCardDelete(currentCard);
  }

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
    setIsDeleteCard(false);
    setSelectedCard({ name: '', link: '' });
  }

  function handleUpdateUser(user){
    api.editProfile(user)
    .then ((res)=>{
        setCurrentUser(res);
        closeAllPopups();
    })
    .catch((err) => {
      console.log(`${err}, попробуйте ещё`);
    })   
  }

  function handleUpdateAvatar(avatar){
    api.editAvatar(avatar)
    .then ((res)=>{
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`${err}, попробуйте ещё`);
    })   
  }

  function handleAddCard(card){
    api.addCard(card)
    .then ((res)=>{
      setCards([res,...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`${err}, попробуйте ещё`);
    })   
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} 
              onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddCard} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
