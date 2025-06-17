import {BASE_URL} from '../../config'

export const login = async (email, password) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
        throw new Error('Ошибка при входе')
    } return response.json();
};

export const register = async (firstName, lastName, email, password) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method : 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({firstName, lastName, email, password}),
    });

    if (!response.ok) {
        throw new Error('Ошибка при регистрации')
    } return response.json();
}