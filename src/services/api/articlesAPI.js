import { BASE_URL } from "../../config"
import { authHeader } from "../authHeader"
import { toast } from "react-toastify"
import { handleResponse } from "../handleResponse"

export const articlesAPI = {
    //Получение всех статей (с фильтрацией и пагинацией)
    getAllArticles: async (data) => {
        const params = new URLSearchParams();

        if (data.specialityId) {
            params.append("specialityId", data.specialityId)
        };
        if (data.query) {
            params.append("query", data.query)
        };
        params.append("page", data.page);
        params.append("size", data.size);
        if (data.sort) {
            params.append("sort", data.sort)
        };

        const response = await fetch(`${BASE_URL}/api/articles?${params.toString()}`, {
            method: "GET",
            headers: authHeader()
    });
        return handleResponse(response);
    },
    
    //Создание статьи
    postArticle: async (data) => {
        const response = await fetch(`${BASE_URL}/api/articles`, {
            method: "POST",
            headers: authHeader(),
            body: data
        })
        return handleResponse(response)
    }, 

    //Получение статьи
    getArticleById: async (id) => {
        const response = await fetch(`${BASE_URL}/api/articles/${id}`, {
            headers: authHeader()
        })
        return handleResponse(response)
    },
    
    //Удаление статьи
    deleteArticleById: async (articleId) => {
        const response = await fetch(`${BASE_URL}/api/articles/${articleId}`, {
            method: "DELETE",
            headers: authHeader()
        })
        return handleResponse(response)
    },
    
    //Получение топ-3 статей
    getPopularArticles: async () => {
        const response = await fetch(`${BASE_URL}/api/articles/popular`,{
            headers: authHeader()
            })
        return handleResponse(response)
    },

}

