import { BASE_URL } from "../../config"
import { authHeader } from "../authHeader"
import { handleResponse } from "../handleResponse"

export const filesAPI = {
    getFiles: async (url) => {
        const response = await fetch(`http://localhost:8080${url}`, {
            headers: authHeader()
        })

    }
}