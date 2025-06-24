import { BASE_URL } from "../../config"
import { authHeader } from "./authHeader"

export const studentAPI = {
    getStudentSummary: async () => {
        const response = await fetch(`${BASE_URL}/api/student/summary`, {
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

const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}