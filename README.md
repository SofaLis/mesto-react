# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<main className="main">
        <section className="profile">
          <button className="profile__avatar-hover"></button>
          <img src="<%=require('./images/image.jpg')%>"  alt="Ваша аватарка" className="profile__avatar"></img>
          <div className="profile__info">
            <div className="profile__container"> 
              <h2 className="profile__name">Жак-Ив Кусто</h2> 
              <button className="profile__edit-button" type="button" ></button> 
            </div> 
            <p className="profile__status">Исследователь океана</p> 
          </div>
          <button type="button" className="profile__add-button"></button>
        </section>
        <section className="elements"> 
        </section> 
      </main>
      <footer className="footer"> 
        <p className="footer__text">© 2020 Mesto Russia</p> 
      </footer>

      <section className="popup popup_user">
        <div className="popup__container">
          <form className="popup__form popup__form_user" name="form-edit">
            <button type="button" className="popup__close-button"></button> 
            <h3 className="popup__heading">Редактировать профиль</h3> 
            <input type="text" id="name-input" className="popup__item popup__item_name" name="name" placeholder="Имя" required maxLength="40" minLength="2"></input>
            <span className="popup__input-error name-input-error"></span> 
            <input type="text" id="job-input" className="popup__item popup__item_job" name="about" placeholder="О себе" required maxLength="200" minLength="2"></input>
            <span className="popup__input-error job-input-error"></span> 
            <button type="submit" className="popup__submit-button" disabled="disabled">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_cards">
        <div className="popup__container">
          <form className="popup__form popup__form_card" name="form-cards">
            <button type="button" className="popup__close-button"></button> 
            <h3 className="popup__heading">Новое место</h3> 
            <input type="text" id="card-name-input" className="popup__item popup__item_card_name" name="name" placeholder="Название" required maxLength="30" minLength="2"></input>
            <span className="popup__input-error card-name-input-error"></span> 
            <input type="url" id="card-link-input" className="popup__item popup__item_card_link" name="link" placeholder="Ссылка на картинку" required></input> 
            <span className="popup__input-error card-link-input-error"></span> 
            <button type="submit" className="popup__submit-button" disabled="disabled">Создать</button>
          </form>
        </div>
      </section>

      <section className="popup popup_delete">
        <div className="popup__container">
          <form className="popup__form popup__form_delete" name="form-delete">
            <button type="button" className="popup__close-button"></button>
            <h3 className="popup__heading popup__heading_delete">Вы уверены?</h3>
            <button type="submit" className="popup__submit-button">Да</button>
          </form>
        </div>
      </section>

      <section className="popup popup_avatar">
        <div className="popup__container">
          <form className="popup__form popup__form_avatar" name="form-avatar">
            <butlton type="button" className="popup__close-button"></button> 
            <h3 className="popup__heading">Обновить аватар</h3> 
            <input type="url" id="avatar-input" className="popup__item popup__item_name" name="avatar" placeholder="Ссылка на картинку" required></input> 
            <span className="popup__input-error avatar-input-error"></span> 
            <button type="submit" className="popup__submit-button" disabled="disabled">Сохранить</button>
          </form>
        </div>
      </section>

      <template className="template">
        <div className="element">
          <button className="element__delete"></button> 
          <img className="element__image" src=" " alt=" "></img>
          <div className="element__caption">
            <h3 className="element__name"></h3>
            <div className="element__case">
              <button className="element__button"></button>
              <span className="element__like">0</span>
            </div>
          </div>
        </div>
      </template>
      <section className="popup popup_image">
        <div className="popup__container-image">
          <form className="popup__image-form" name="form-image">
            <button type="button" className="popup__close-button"></button> 
            <img className="popup__image" src="#" alt="#"> </img>
            <h3 className="popup__name"></h3>
          </form>
        </div>
      </section>