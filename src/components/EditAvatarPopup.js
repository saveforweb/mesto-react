import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const { isOpen, onClose, onUpdateAvatar } = props;
    const inputImageUrl = React.useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            link: inputImageUrl.current.value
        });

        inputImageUrl.current.value = null;
    }

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Сохранить"
            onSubmit={handleSubmit}
        >
            <input
                type="url"
                id="avatarlink"
                name="avatarlink"
                defaultValue={''}
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type-avatarlink"
                required
                ref={inputImageUrl}
            />
            <span className="avatarlink-error popup__error"></span>
        </PopupWithForm>
    )

}

export default EditAvatarPopup;