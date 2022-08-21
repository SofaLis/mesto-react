export const BASE_URL = 'https://auth.nomoreparties.co';


export function register(data) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка  ${res.status}`)
      }
    })
}


export function authorize(data) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка  ${res.status}`)
      }
    })
};

export function getContent() {
  const token = localStorage.getItem('jwt');
  if (token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(`Ошибка  ${res.status}`)
        }
      })
  } else {
    return Promise.reject(`Ошибка: пользователь не авторизован `)
  }
}
