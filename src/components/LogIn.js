import React from 'react';
//import { Link, withRouter } from 'react-router-dom';

export default function LogIn() {
    return (
        <section className="authorization authorization__register">
            <form className="authorization__form">
                <h2 className="authorization__heading">Вход</h2>
                <input name="email" className="authorization__input"  type="email" placeholder="Email" required />
                <input name="password" className="authorization__input" type="password" placeholder="Пароль" required />
                <button className="authorization__submit-button" type="submit">Войти</button>
            </form>
        </section>    
    );
}