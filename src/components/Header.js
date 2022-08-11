import React from 'react';
import logo from '../images/logo.svg';
import { Switch, Route, Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo" />
            <Switch>
                <Route exact path="/">
                    <div className="header__inside">
                        <p className="header__email">jhgfddfg</p>
                        <Link to='/sign-in' className="header__out">Выйти</Link>
                    </div>
                </Route>
                <Route exact path="/sign-in">
                    <Link to="/sign-up" className="header__authorization">Регистрация</Link>
                </Route>
                <Route exact path="/sign-up">
                    <Link to="/sign-in" className="header__authorization">Войти</Link>
                </Route>
            </Switch>
        </header>
    );
}