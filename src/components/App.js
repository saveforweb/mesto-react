import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups()
    }
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={handleOverlay}
        buttonText="Сохранить"
      >
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={''}
          placeholder="Имя"
          className="popup__input popup__input_type_profile-name"
          minLength={2}
          maxLength={40}
          required
        />
        <span className="name-error popup__error"></span>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          placeholder="Роль"
          defaultValue={''}
          className="popup__input popup__input_type_profile-subtitle"
          minLength={2}
          maxLength={200}
          required
        />
        <span className="subtitle-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="content"
        isOpen={isAddPlacePopupOpen}
        onClose={handleOverlay}
        buttonText="Добавить"
      >
        <input
          type="text"
          id="place"
          name="place"
          defaultValue={''}
          placeholder="Название"
          className="popup__input popup__input_type-content-place"
          minLength={2}
          maxLength={30}
          required
        />
        <span className="place-error popup__error"></span>
        <input
          type="url"
          id="link"
          name="link"
          defaultValue={''}
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type-content-link"
          required
        />
        <span className="link-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={handleOverlay}
        buttonText="Сохранить"
      >
        <input
          type="url"
          id="avatarlink"
          name="avatarlink"
          defaultValue={''}
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type-avatarlink"
          required
        />
        <span className="avatarlink-error popup__error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={handleOverlay}
      />
    </div>
  );
}

export default App;
