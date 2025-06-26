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
            headers: {
                ...authHeader(),
                'Content-type' : "application/json"
                },
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    },

    postResponse: async (data) => {
        const response = await fetch(`${BASE_URL}/api/mentorship/respond`, {
            method: "POST",
            headers: {
                ...authHeader(),
                'Content-type' : "application/json"
                },
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    },

    postStudentReject: async () => {
        const response = await fetch(`${BASE_URL}/api/mentorship/student/reject`, {
            method: "POST",
            headers: {
                ...authHeader(),
                'Content-type' : "application/json"
                }
            
        })
        return handleResponse(response)
    },

    postMentorReject: async (studentId) => {
        const response = await fetch(`${BASE_URL}/api/mentorship/mentor/reject/${studentId}`, {
            method: "POST",
            headers: {
                ...authHeader(),
                'Content-type' : "application/json"
                },
            body: JSON.stringify(studentId)
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