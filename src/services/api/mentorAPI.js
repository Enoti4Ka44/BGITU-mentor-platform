import {BASE_URL} from "../../config"
import {authHeader} from "./authHeader"
import { toast } from "react-toastify"

export const mentorAPI = {
    //Получение списка всех менторов (с фильтрацией и пагинацией)
      getAllMentors: async (data) => {
        const params = new URLSearchParams();

        if (data.specialityId) {
            params.append("specialityId", data.specialityId)
        };
        if (data.query) {
            params.append("query", data.query)
        };
        params.append("page", data.page);
        params.append("size", data.size);
        if (data.sort) {
            params.append("sort", data.sort)
        };

        const response = await fetch(`${BASE_URL}/api/mentors?${params.toString()}`, {
            method: "GET",
            headers: authHeader()
        });

        return handleResponse(response);
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