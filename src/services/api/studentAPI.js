import { BASE_URL } from "../../config"
import { authHeader } from "./authHeader"
import { toast } from "react-toastify"

export const studentAPI = {
    //Получить карточку студента
    getStudentSummary: async () => {
        const response = await fetch(`${BASE_URL}/api/profiles/student`, {
            headers: authHeader()
        })

        return handleResponse(response)
    },
    
    //Изменить карточку студента
    patchStudentSummary: async (data) => {
        const response = await fetch(`${BASE_URL}/api/profiles/student`, {
            method: "PATCH",
            headers: authHeader(),
            body: data
        }) 

        return handleResponse(response)
    },

    //Получить профиль студента
    getStudentProfile: async () => {
        const response = await fetch(`${BASE_URL}/api/profiles/student/credentials`, {
            headers: authHeader()
        })

        return handleResponse(response)
    },

    //Изменить карточку студента
    patchStudentProfile: async (data) => {
        const response = await fetch(`${BASE_URL}/api/profiles/student/credentials`, {
            method: "PATCH",
            headers: authHeader(),
            body: data
        }) 

        return handleResponse(response)
    },

    //Получить ментора студента
    getStudentMentor: async () => {
        const response = await fetch(`${BASE_URL}/api/profiles/student/mentor`, {
            headers: authHeader()
        }) 

        return handleResponse(response)
    },

    //Прекратить менторство
    deleteStudentMentor: async () => {
        const response = await fetch(`${BASE_URL}/api/profiles/student/mentor`, {
            method: "DELETE",
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