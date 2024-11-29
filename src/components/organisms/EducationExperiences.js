import React, {useState, useEffect} from "react";
import ExperienceItem from "../molecules/ExperienceItem";
import useGetExperiences from "../../hooks/useGetExperience";
import Loading from "../atoms/Loading";

const EducationExperiences = ({ experience }) => {
    const { experiences, loading, error } = useGetExperiences("education");
    const [educationExperiences, setEducationExperiences] = useState([]);

    useEffect(() => {
        if (experiences) {
            setEducationExperiences(experiences);
        }
    }, [experiences]);

    return (
        <section className="educationExperiences">
            <h2>Education</h2>
            {loading ? (
                <Loading />
            ) : (
                educationExperiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))
            )}
        </section>
    );
}

export default EducationExperiences;