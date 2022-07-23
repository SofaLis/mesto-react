import React from 'react';
export default function PopupWithImage(props) {
    return (
        <section className={props.card ? `popup popup_image popup_opened` : `popup popup_image`}>
        <div className="popup__container-image">
          <form className="popup__image-form" name="form-image">
            <button type="button" className="popup__close-button" onClick={() => props.onClose()}></button> 
            <img className="popup__image" src={props.card.link} alt={props.card.name}></img>
            <h3 className="popup__name">{props.card.name}</h3>
          </form>
        </div>
      </section>
    )
}