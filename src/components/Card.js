function Card(props) {
    const {card, onCardClick} = props;

    function handleImageClick() {
        onCardClick(card);
    }

    return (
        <li className="element">
        <button type="button" className="element__trash-button"></button>
        <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleImageClick}
        />
        <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
            <button type="button" className="element__like-button"></button>
            <span className="element__like-count">{card.likes.length}</span>
        </div>
        </div>
    </li>
    )
};

export default Card;