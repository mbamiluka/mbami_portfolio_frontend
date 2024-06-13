import React, { useEffect, useState } from "react";

const url = 'https://api.github.com/users/mbamiluka/repos';

const useGetProficiencies = (url) => {
    const [proficiencies, setProficiencies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setProficiencies(data);
                    setIsLoading(false);
                });
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [proficiencies]);

    return { proficiencies, isLoading, error };
}
