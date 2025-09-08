import {BASE_URL} from "../../config"
import {authHeader} from "./authHeader"
import { toast } from "react-toastify"

export const mentorAPI = {
    getAllMentors: async () => {
        const response = await fetch(`${BASE_URL}/api/mentor/all`, { //FIX
            headers: authHeader()
        }) 
        return handleResponse(response)
    },

    getPopularMentors: async () => {
        const response = await fetch(`${BASE_URL}/api/mentors/popular`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },

    getMentorById: async(id) => {
        const response = await fetch(`${BASE_URL}/api/mentors/${id}`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    },
    getMentorSummary: async() => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/credentials`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    },
    getMentorStudents: async() => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/students`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    },
    getMentorArticles: async() => {
        const response = await fetch(`${BASE_URL}/api/profiles/mentor/articles`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    },

    patchMentortSummary: async (data) => {
            const response = await fetch(`${BASE_URL}/api/profiles/mentor/credentials`, {
                method: "PATCH",
                headers: authHeader(),
                body: data
            }) 
    
            return handleResponse(response)
        },

    searchMentors: async (query) => {
        const response = await fetch(`${BASE_URL}/api/mentor/search?query=${encodeURIComponent(query)}`, {
            headers: authHeader(),
            });
            return handleResponse(response);
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