import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import defaultAvatar from "../images/profile-avatar.jpg";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick} = props;

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(defaultAvatar);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })

    api.getInitialCards()
      .then((result) => {
        setCards(result);
      })
  }, []
  );

  const cardList = cards.map((card) => {
      return <Card key={card._id} card={card} onCardClick={onCardClick}/>
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__main">
          <div
            onClick={onEditAvatar}
            className="profile__avatar-container"
          >
            <img
              src={userAvatar}
              alt=""
              className="profile__avatar"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-block">
              <h1 className="profile__name">{userName}</h1>
              <button
                onClick={onEditProfile}
                type="button"
                className="profile__edit-button"
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cardList}
        </ul>
      </section>
    </main>
  );
}

export default Main;
