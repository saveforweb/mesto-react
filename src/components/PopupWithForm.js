function PopupWithForm(props) {

    const { title, name, isOpen, onClose } = props;

    return (
        <div className={`popup popup-${name} ${isOpen ? 'popup_open' : ''}`} onClick={onClose}>
            <div className="popup__window">
                <button
                    type="button"
                    className="popup__button-close popup__button-close_type_profile"
                    onClick={onClose}
                ></button>
                <h2 className="popup__title">{title}</h2>
                <form
                    className={`popup__form popup__form_type_${name}`}
                    name={`edit-${name}`}
                // novalidate
                >
                    <fieldset className="popup__form-items">
                        {/* <input
                            type="text"
                            id="name"
                            name="name"
                            value=""
                            placeholder="Имя"
                            className="popup__input popup__input_type_profile-name"
                            minlength="2"
                            maxlength="40"
                            required
                        />
                        <span className="name-error popup__error"></span>
                        <input
                            type="text"
                            id="subtitle"
                            name="subtitle"
                            placeholder="Роль"
                            value=""
                            className="popup__input popup__input_type_profile-subtitle"
                            minlength="2"
                            maxlength="200"
                            required
                        />
                        <span className="subtitle-error popup__error"></span> */}
                        <button type="submit" className="popup__button-save">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;