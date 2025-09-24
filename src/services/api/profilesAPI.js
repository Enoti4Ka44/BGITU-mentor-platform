import { studentAPI } from "./studentAPI";
import { mentorProfileAPI } from "./mentorProfileAPI";
export const profilesAPI = {
  patchProfile: async (role, data) => {
    if (role === "STUDENT") return studentAPI.patchStudentProfile(data);
    if (role === "MENTOR") return mentorProfileAPI.patchMentorProfile(data);
  },
  
  getProfile: async (role) => {
    if (role === "STUDENT") return studentAPI.getStudentProfile();
    if (role === "MENTOR") return mentorProfileAPI.getMentorProfile();
  },
};
