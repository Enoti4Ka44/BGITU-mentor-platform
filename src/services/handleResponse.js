import { toast } from "react-toastify";

export const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Server error:', errorData);
    toast.error(`${errorData.message}`)
    throw new Error(errorData.message || response.statusText);
  } 
  if (response.status === 204) {
    return null;
  }
  return response.json();
}