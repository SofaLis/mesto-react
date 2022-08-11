import React from 'react';
import imgOk from '../images/Ok.svg'
import imgErr from '../images/Err.svg'

export default function InfoTooltip() {


    return (
        <section className="popup">
            <div className="popup__container popup__container_info">
                <button type="button" className="popup__close-button"></button>
                <div className='popup__check'>
                    <img className="popup__img-check" src={imgOk}></img>
                    <span className="popup__text">Вы успешно зарегестрировались!</span>
                </div>
            </div>
        </section>
    )
}