import {BASE_URL} from '../../config'

export const authAPI = {
    //Вход
    login: async (email, password) => {
        try {
            const response = await fetch(`${BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({email, password}),
            });

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Неверные данные');
            } 
            
            localStorage.setItem("token", data.accessToken); 
            localStorage.setItem("role", data.role)
            return data;

        } catch (error) {
            throw error
        }
},
    //Регистрация
    register: async (firstName, lastName, email, password, role) => {
        try {
            const response = await fetch(`${BASE_URL}/api/auth/register`, {
                method : 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({firstName, lastName, email, password, role}),
            });

            const data = await response.json()
        
            if (!response.ok) {
                throw new Error(data.message || 'Неверные данные');
            } 
            
            localStorage.setItem("token", data.accessToken); 
            return data;

        } catch (error) {
            throw error
        }
    },
}

