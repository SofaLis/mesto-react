import React from 'react';
export default function PopupWithForm(props) {
  return (
    <section className={props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}>
      <div className="popup__container">
        <form className={`popup__form popup__form_${props.name}`} name={`form-${props.name}`}>
          <button type="button" className="popup__close-button" onClick={() => props.onClose()}></button>
          <h3 className="popup__heading">{props.title}</h3>
          {props.children}
        </form>
      </div>
    </section>
    )
}