import {BASE_URL} from "../../config"
import {authHeader} from "./authHeader"
import { toast } from "react-toastify"

export const mentorProfileAPI = {

    //Получение карточки ментора (личная) 
    getMentorProfile: async() => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/`,{ 
            headers: authHeader()
        })
        
        return handleResponse(response)
    },

    //Изменение карточки ментора (личная) 
    patchMentorProfile: async(data) => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/`,{ 
            method: "PATCH",
            headers: authHeader(),
            body: data
        })
        
        return handleResponse(response)
    },
    
    //Получение профиля ментора
    getMentorProfile: async() => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/credentials`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    },

    //Изменение профиля ментора
    patchMentorProfile: async(data) => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/credentials`,{ 
            method: "PATCH",
            headers: authHeader(),
            body: data
        })

        return handleResponse(response)
    },
    
    //Получение всех студентов ментора 
    getMentorStudents: async() => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/students`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    },

    //Получение всех статей ментора
    getMentorArticles: async() => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/articles`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    },

    //Прекратить менторство со студентом
    deleteMentorStudent: async(studentId) => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/students/${studentId}`,{ 
            method: "DELETE",
            headers: authHeader(),
            body: JSON.stringify(studentId)
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