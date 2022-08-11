import React from 'react';
import { Link} from 'react-router-dom';

export default function Register() {
    return (
        <section className="authorization authorization__register">
            <form className="authorization__form">
                <h2 className="authorization__heading">Регистрация</h2>
                <input name="email" className="authorization__input"  type="email" placeholder="Email" required />
                <input name="password" className="authorization__input" type="password" placeholder="Пароль" required />
                <button className="authorization__submit-button" type="submit">Зарегистрироваться</button>
            </form>
            <p className="authorization__text">Уже зарегистрированы? 
            <Link to="/sign-in" className="authorization__text authorization__text_link"> Войти</Link></p>
        </section>    
    );
}