import {BASE_URL} from "../../config"
import {authHeader} from "./authHeader"

export const mentorshipAPI = {
    getApplications: async () => {
        const response = await fetch(`${BASE_URL}/api/mentorship/applications/me`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },

    postRequest: async (data) => {
        const response = await fetch(`${BASE_URL}/api/mentorship/request`, {
            method: "POST",
            headers: {
                ...authHeader(), 
                'Content-Type':'application/json' 
            },
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    },

    postResponse: async (data) => {
        const response = await fetch(`${BASE_URL}/api/mentorship/response`, {
            method: "POST",
            headers: {
                ...authHeader(), 
                'Content-Type':'application/json' 
            },
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    }
}

const handleResponse = (response) => {
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}