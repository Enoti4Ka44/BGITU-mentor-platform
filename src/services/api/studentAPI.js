import { BASE_URL } from "../../config"
import { authHeader } from "./authHeader"
import { toast } from "react-toastify"

export const studentAPI = {
    getStudentSummary: async () => {
        const response = await fetch(`${BASE_URL}/api/student/summary`, {
            headers: authHeader()
        })

        return handleResponse(response)
    },

    getStudentMentor: async () => {
        const response = await fetch(`${BASE_URL}/api/profiles/student/mentor`, {
            headers: authHeader()
        }) 

        return handleResponse(response)
    },
    
    patchStudentSummary: async (data) => {
        const response = await fetch(`${BASE_URL}/api/student/summary`, {
            method: "PATCH",
            headers: authHeader(),
            body: data
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