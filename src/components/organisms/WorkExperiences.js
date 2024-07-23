import React, {useState, useEffect} from "react";
import ExperienceItem from "../molecules/ExperienceItem";

const apiUrl = process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL_DEVELOPMENT;

const WorkExperiences = () => {
    const [experiences, setExperiences] = useState([]);

    try {
        useEffect(() => {
            const fetchExperiences = async () => {
                const response = await fetch(`${apiUrl}/api/v1/experience`);
                const data = await response.json();
                setExperiences(data);
            };

            fetchExperiences();
        }, [experiences]);
    } catch (error) {
        console.log(error);
    }

    return (
        <section>
            <h1 className="Heading">Experience</h1>
            {experiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
        </section>
    );
}

export default WorkExperiences;