import { useState, useEffect } from "react";

const apiUrl = process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL_DEVELOPMENT;

const useGetExperiences = (type) => {
	const [experiences, setExperiences] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchExperiences = async () => {
			try {
				const response = await fetch(`${apiUrl}/api/v1/experience?type=${type}`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setExperiences(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchExperiences();
	}, [type]);

	return { experiences, loading, error };
};

export default useGetExperiences;

