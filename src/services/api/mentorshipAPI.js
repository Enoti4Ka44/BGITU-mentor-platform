import {BASE_URL} from "../../config"
import {authHeader} from "./authHeader"
import { toast } from "react-toastify"

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
            headers: authHeader(),
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    },

    postResponse: async (data) => {
        const response = await fetch(`${BASE_URL}/api/mentorship/response`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    }
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