import React, { useEffect, useState } from "react";
import API_ENDPOINTS from "../config/api";

// Custom hook to fetch skills from the backend using fetch instead of axios
const useGetSkills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.SKILL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, isLoading, error };
};

export default useGetSkills;