import React from 'react';
export default function Card (props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
            <div className="element">
                <button className="element__delete"></button> 
                <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}></img>
                <div className="element__caption">
                    <h3 className="element__name">{props.card.name}</h3>
                    <div className="element__case">
                        <button className="element__button"></button>
                        <span className="element__like">{props.card.likes.length}</span>
                    </div>
                </div>
            </div>
    )
}