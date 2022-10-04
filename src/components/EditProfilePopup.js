import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const { isOpen, onClose, onUpdateUser } = props;
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({ name, about: description });
    }

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="profile"
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Сохранить"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Имя"
                className="popup__input popup__input_type_profile-name"
                minLength={2}
                maxLength={40}
                required
                onChange={handleNameChange}
                value={name}
            />
            <span className="name-error popup__error"></span>
            <input
                type="text"
                id="subtitle"
                name="subtitle"
                placeholder="Роль"
                className="popup__input popup__input_type_profile-subtitle"
                minLength={2}
                maxLength={200}
                required
                onChange={handleDescriptionChange}
                value={description}
            />
            <span className="subtitle-error popup__error"></span>
        </PopupWithForm>
    )

}

export default EditProfilePopup;