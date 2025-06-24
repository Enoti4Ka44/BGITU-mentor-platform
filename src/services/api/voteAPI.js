import { toast } from "react-toastify"
import { BASE_URL } from "../../config"
import { authHeader } from "./authHeader"

export const voteAPI = {
    postMentorVote: async (id, upvote) => {
        const response = await fetch(`${BASE_URL}/api/mentor/mentors/${id}/vote?upvote=${upvote}`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({id})
        })
        return handleResponse(response)
    },

    postArticleVote: async (id, upvote) => {
        const response = await fetch(`${BASE_URL}/api/article/${id}/vote?like=${upvote}`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({id})
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