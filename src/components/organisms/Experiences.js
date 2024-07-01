import React, {useState, useEffect} from "react";
import ExperienceItem from "../molecules/ExperienceItem";

const apiUrl = process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL_DEVELOPMENT;

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);

    try {
        useEffect(() => {
            const fetchExperiences = async () => {
                const response = await fetch(`${apiUrl}/api/v1/experience`);
                const data = await response.json();
                setExperiences(data);
                console.log(data); // REMEMBER TO REMOVE THIS!!!
            };

            fetchExperiences();
        }, []);
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

export default Experiences;

//test data
const sampleExperiences = [
    {
        start: "2018",
        end: "2020",
        company: "Company A",
        role: "Software Engineer",
        achievements: "Achievement 1, Achievement 2, Achievement 3",
        logo: "https://via.placeholder.com/150",
    },
    {
        start: "2016",
        end: "2018",
        company: "Company B",
        role: "Software Engineer",
        achievements: "Achievement 1, Achievement 2, Achievement 3, kkkkk kkkk kkkk kkkk kkkk kkkkk kkk kk kkkk kkkk",
        logo: "https://via.placeholder.com/150",
    },
    {
        start: "2014",
        end: "2016",
        company: "Company C",
        role: "Software Engineer",
        achievements: "Achievement 1, Achievement 2, Achievement 3",
        logo: "https://via.placeholder.com/150",
    },
];