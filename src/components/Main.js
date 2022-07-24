import api from '../utils/Api'
import React from 'react';
import Card from "./Card.js";


export default function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState();
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [cards, setCards] = React.useState([]);
    console.log(`Fi`)

    React.useEffect(() => {
        Promise.all([
            api.getUserInfo(), 
            api.getInitialCards()])
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserAvatar(user.avatar);
                setUserDescription(user.about)
                setCards(cards)
            })
            .catch((err) => {
              console.log(`${err}, попробуйте ещё`);
            })
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar-hover" onClick={props.onEditAvatar}></button>
                <img src={userAvatar} alt="Ваша аватарка" className="profile__avatar"/>
                <div className="profile__info">
                    <div className="profile__container"> 
                    <h2 className="profile__name">{userName}</h2> 
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button> 
                    </div> 
                <p className="profile__status">{userDescription}</p> 
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => { return (<Card card={card} key={card._id} onCardClick={props.onCardClick}/>)})}
            </section> 
      </main>
    )
}