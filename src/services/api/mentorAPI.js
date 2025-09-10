import {BASE_URL} from "../../config"
import {authHeader} from "./authHeader"
import { toast } from "react-toastify"

export const mentorAPI = {
    //Получение списка всех менторов (с фильтрами)
    getAllMentors: async () => {
        const response = await fetch(`${BASE_URL}/api/mentor/all`, { //FIX
            headers: authHeader()
        }) 
        return handleResponse(response)
    },

    //Получение топ-3 ментора
    getPopularMentors: async () => {
        const response = await fetch(`${BASE_URL}/api/mentors/popular`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },

    //Получение карточки ментора (modal)
    getMentorById: async(id) => {
        const response = await fetch(`${BASE_URL}/api/mentors/${id}`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    },

    // searchMentors: async (query) => {
    //     const response = await fetch(`${BASE_URL}/api/mentor/search?query=${encodeURIComponent(query)}`, {
    //         headers: authHeader(),
    //         });
    //         return handleResponse(response);
    //     },



}

const handleResponse = async (response) => {
  if(!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Server error:', errorData);
    toast.error(`${errorData.message}`)
    throw new Error(errorData.message || response.statusText);
  }
  return response.json();
}