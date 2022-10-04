import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const { isOpen, onClose, onAddPlace } = props;
    const [place, setPlace] = React.useState('');
    const [link, setLink] = React.useState('');

    function handlePlaceChange(e) {
        setPlace(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({ name: place, link });
        setPlace('');
        setLink('');
    }

    return (
        <PopupWithForm
            title="Новое место"
            name="content"
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Добавить"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                id="place"
                name="place"
                placeholder="Название"
                className="popup__input popup__input_type-content-place"
                minLength={2}
                maxLength={30}
                required
                onChange={handlePlaceChange}
                value={place}
            />
            <span className="place-error popup__error"></span>
            <input
                type="url"
                id="link"
                name="link"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type-content-link"
                required
                onChange={handleLinkChange}
                value={link}
            />
            <span className="link-error popup__error"></span>
        </PopupWithForm>
    )

}

export default AddPlacePopup;