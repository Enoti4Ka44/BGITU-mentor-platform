import { BASE_URL } from "../../config"
import { authHeader } from "./authHeader"

export const articlesAPI = {
    getAllArticles: async () => {
        const response = await fetch(`${BASE_URL}/api/article`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },

    getPopularArticles: async () => {
        const response = await fetch(`${BASE_URL}/api/article/top`,{
            headers: authHeader()
            })
        return handleResponse(response)
    },

    getArticleById: async (id) => {
        const response = await fetch(`${BASE_URL}/api/article/${id}`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },

    deleteArticleById: async (id) => {
        const response = await fetch(`${BASE_URL}/api/article/${id}`, {
            method: "DELETE",
            headers: {
                ...authHeader(),
                'Content-Type' : "application/json"
            },
            body: JSON.stringify(id)
        })
        return handleResponse(response)
    },

    postArticle: async (data) => {
        const response = await fetch(`${BASE_URL}/api/article`, {
            method: "POST",
            headers: {
                ...authHeader(),
                'Content-Type' : "application/json"
            },
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    }
}

const handleResponse = async (response) => {
  if(!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Server error:', errorData);
    throw new Error(errorData.message || response.statusText);
  }
  return response.json();
}