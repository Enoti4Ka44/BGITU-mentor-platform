import {BASE_URL} from "../../config"
import {authHeader} from "./authHeader"
import { toast } from "react-toastify"

export const applicationsAPI = {
    //Заявки (входящие для ментора, отправленные для студента)
    getApplications: async () => {
        const response = await fetch(`${BASE_URL}/api/applications`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },

    //Отправить заявку на менторство
    postApplication: async (data) => {
        const response = await fetch(`${BASE_URL}/api/applications`, {
            method: "POST",
            headers: {
                ...authHeader(),
                'Content-type' : "application/json"
                },
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    },

    //Ответить на заявку
    patchApplicationResponse: async (data) => { // FIX
        const response = await fetch(`${BASE_URL}/api/applications/${data.applicationId}`, {
            method: "POST",
            headers: {
                ...authHeader(),
                'Content-type' : "application/json"
                },
            body: JSON.stringify(data.accepted)
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