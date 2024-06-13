import React from "react";
import { TypeAnimation } from 'react-type-animation';   

const Intro = () => {
    return (
        <section className="UpperSection">
             <TypeAnimation
                style={{ whiteSpace: 'pre-line'}}
                sequence={[
                    400,
                    'Name: Mbami Luka\nRole: Software Engineer\nLocation: Mars 🪐',
                    400,
                    'Name: Mbami Luka\nRole: Software Engineer\nLocation: Earth 🌎',
                    350,
                    'Name: Mbami Luka\nRole: Software Engineer\nLocation: Marietta, GA'
                ]}
                speed={45}
                repeat={0}
                className="HeroIntroH1"
            />
            <p className="HeroIntro p" >
                Having undergone a Bachelors in computer science,
                I'm proficient with algorithms, data structures, Operating Systems, Prob & Stats, etc.
            </p>
        </section>
         
    );
}
export default Intro;