import { BASE_URL } from "../../config"
import { authHeader } from "./authHeader"

export const voteAPI = {
    postMentorVote: async (id, upvote) => {
        const response = await fetch(`${BASE_URL}/api/mentor/mentors/${id}/vote`, {
            method: "POST",
            headers: {
                ...authHeader(),
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({id, upvote})
        })
        return handleResponse(response)
    },
}

const handleResponse = async (response) => {
  if(!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Server error:', errorData);
    throw new Error(errorData.message || response.statusText);
  }
  return response.json();
}