import React, {useState, useEffect} from "react";
import ExperienceItem from "../molecules/ExperienceItem";
import useGetExerience from "../../hooks/useGetExperience";

const apiUrl = process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL_DEVELOPMENT;

const WorkExperiences = () => {
    const {experiences, error} = useGetExerience('work');
    const [workExperiences, setWorkExperiences] = useState([]);

    useEffect(() => {
        if (experiences) {
            setWorkExperiences(experiences);
        }
    }, [experiences]);

    return (
        <section className='workExperiences'>
            <h2>Work Experiences</h2>
            {workExperiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
        </section>
    );
}

export default WorkExperiences;