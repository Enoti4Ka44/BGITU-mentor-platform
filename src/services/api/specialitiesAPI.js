import { BASE_URL } from "../../config"
import { authHeader } from "../authHeader"
import { toast } from "react-toastify"
import { handleResponse } from "../handleResponse"

export const specialitiesAPI = {
    //Получение всех специальностей
    getAllSpecialities: async () => {
        const response = await fetch(`${BASE_URL}/api/specialities`, {
            headers: authHeader()
        })

        return handleResponse(response)
    },

}
