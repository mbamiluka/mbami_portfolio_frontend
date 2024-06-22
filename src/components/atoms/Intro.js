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
                This site was fully programmed by me - Everything including 
                frontend, backend & devops. 
                See <a href="">SOURCE CODE</a> docs for @author.
            </p>
        </section>
         
    );
}
export default Intro;