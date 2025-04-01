const API_BASE_URL = "https://mbamiluka0-1-0.onrender.com"

const API_ENDPOINTS = {
    AUTH: `${API_BASE_URL}/auth`,
    VALIDATE: `${API_BASE_URL}/auth/validate`,
    SIGNIN: `${API_BASE_URL}/auth/signin`,
    SIGNUP: `${API_BASE_URL}/auth/signup`,
    EXP_ROLE: `${API_BASE_URL}/api/v1/expRole`,
    EXP_TYPE: `${API_BASE_URL}/api/v1/expType`,
    ACHIEVEMENT: `${API_BASE_URL}/api/v1/achievement`,
    PROJECT: `${API_BASE_URL}/api/v1/project`,
    EXPERIENCE: `${API_BASE_URL}/api/v1/experience`,
    SKILL: `${API_BASE_URL}/api/v1/skills`,
    SKILL_CATEGORY: `${API_BASE_URL}/api/v1/skillCategory`,
    IMAGE_UPLOAD: `${API_BASE_URL}/api/v1/images/upload`,
    CONTENT: `${API_BASE_URL}/api/v1/contents`,
    
};

export default API_ENDPOINTS;
