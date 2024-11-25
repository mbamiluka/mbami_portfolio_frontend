import React, { useEffect, useState } from "react";

// Custom hook to fetch skills from the backend using fetch instead of axios
const useGetSkills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/skills');
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