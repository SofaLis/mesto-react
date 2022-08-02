import React from 'react';
import PopupWithForm from './PopupWithForm';

function handleCardDeleteSubmit(e) {
    e.preventDefault();
    props.onCardDelete(e);
}

//Решила дополнительно реализовать удаление карточки
export default function DeleteCard(props) {
    <PopupWithForm buttonText={'Да'} name={`delete`} title={`Вы уверены?`} onClose={props.onClose} onSubmit={handleSubmit} isOpen={props.isOpen}>
    </PopupWithForm>
}