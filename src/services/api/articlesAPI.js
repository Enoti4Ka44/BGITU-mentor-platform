import { BASE_URL } from "../../config"
import { authHeader } from "./authHeader"
import { toast } from "react-toastify"

export const articlesAPI = {
    getAllArticles: async () => {
        const response = await fetch(`${BASE_URL}/api/articles`, { //FIX
            headers: authHeader()
        })
        return handleResponse(response)
    },

    getPopularArticles: async () => {
        const response = await fetch(`${BASE_URL}/api/articles/popular`,{
            headers: authHeader()
            })
        return handleResponse(response)
    },

    getArticleById: async (id) => {
        const response = await fetch(`${BASE_URL}/api/articles/${id}`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },

    deleteArticleById: async (id) => {
        const response = await fetch(`${BASE_URL}/api/articles/${id}`, {
            method: "DELETE",
            headers: authHeader(),
            body: JSON.stringify(id)
        })
        return handleResponse(response)
    },

    postArticle: async (data) => {
        const response = await fetch(`${BASE_URL}/api/articles`, {
            method: "POST",
            headers: authHeader(),
            body: data
        })
        return handleResponse(response)
    }, 

    searchArticles: async (query) => {
        const response = await fetch(`${BASE_URL}/api/article/search?query=${encodeURIComponent(query)}`, {
            headers: authHeader(),
        });
        return handleResponse(response);
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