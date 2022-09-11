import { apiConfig } from "./utils";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => {
        return this._checkResponse(res);
      })
  }

  addUserCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        link: link
      }),
      headers: this._headers
    })
      .then(res => {
        return this._checkResponse(res);
      })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => {
        return this._checkResponse(res);
      })
  }

  updateUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        about: about
      }),
      headers: this._headers
    })
      .then(res => {
        return this._checkResponse(res);
      })
  }

  updateUserAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: link,
      }),
      headers: this._headers
    })
      .then(res => {
        return this._checkResponse(res);
      })
  }

  addCardLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes `, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => {
        return this._checkResponse(res);
      })
  }

  removeCardLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        return this._checkResponse(res);
      })
  }

  deleleCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        return this._checkResponse(res);
      })
  }

}

const api = new Api(apiConfig);

export default api;