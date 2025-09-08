import { BASE_URL } from "../../config"
import { authHeader } from "./authHeader"
import { toast } from "react-toastify"

export const specialitiesAPI = {
    getAllSpecialities: async () => {
        const response = await fetch(`${BASE_URL}/api/specialities`, {
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