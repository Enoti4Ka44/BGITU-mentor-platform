import {BASE_URL} from "../../config"
import {authHeader} from "./authHeader"

export const mentorAPI = {
    getAllMentors: async () => {
        const response = await fetch(`${BASE_URL}/api/mentor/all`, {
            headers: authHeader()
        }) 
        return handleResponse(response)
    },

    getPopularMentors: async () => {
        const response = await fetch(`${BASE_URL}/api/mentor/popular`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },

    getMentorById: async(id) => {
        const response = await fetch(`${BASE_URL}/api/mentor/${id}`,{ 
            headers: authHeader()
        })

        return handleResponse(response)
    }
}

const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}