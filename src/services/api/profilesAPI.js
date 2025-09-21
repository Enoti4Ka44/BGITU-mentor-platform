import { studentAPI } from "./studentAPI";
import { mentorAPI } from "./mentorAPI";

export const profilesAPI = {
  patchProfile: async (role, data) => {
    if (role === "STUDENT") return studentAPI.patchStudentProfile(data);
    if (role === "MENTOR") return mentorAPI.patchMentorProfile(data);
  },
  
  getProfile: async (role) => {
    if (role === "STUDENT") return studentAPI.getStudentProfile();
    if (role === "MENTOR") return mentorAPI.getMentorProfile();
  },
};
