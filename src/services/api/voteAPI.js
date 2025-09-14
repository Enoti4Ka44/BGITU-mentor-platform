import { toast } from "react-toastify"
import { BASE_URL } from "../../config"
import { authHeader } from "../authHeader"
import { handleResponse } from "../handleResponse"


export const voteAPI = {
    //Проголосовать за ментора
    postMentorVote: async (id, upvote) => {
        const response = await fetch(`${BASE_URL}/api/mentors/${id}/vote?upvote=${upvote}`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({id})
        })
        return handleResponse(response)
    },

    //Проголосовать за статью
    postArticleVote: async (id, upvote) => {
        const response = await fetch(`${BASE_URL}/api/articles/${id}/vote?like=${upvote}`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({id})
        })
        return handleResponse(response)
    },
}
