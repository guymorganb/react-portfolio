import React, {useState, useRef} from "react";
import myImage from '../assets/Third.jpeg'
import myImage2 from '../assets/First.jpeg'


export default function AboutMe(){
    // useState hook initializes the imageSrc state with myImage2
    const [imageSrc, setImageSrc] = useState(myImage);
    // useRef hook gets a reference to the img element
    const imgRef = useRef();
    
// handleMouseOver and handleMouseOut event handlers to apply the rollover effect. 
// The image's src changes when the mouse is over it and reverts back when the mouse is out.
// The event handlers are bound to the figure element with the onMouseOver and onMouseOut props.
    const handleMouseOver = () => {
        imgRef.current.style.transition = 'all 1s ease-in-out';
        imgRef.current.style.transformStyle = 'preserve-3d';
        imgRef.current.style.transform = 'rotateY(180deg)';
        setImageSrc(myImage2);
    };

    const handleMouseOut = () => {
        imgRef.current.style.transition = 'all 0.5s ease-in-out';
        imgRef.current.style.transformStyle = 'preserve-3d';
        imgRef.current.style.transform = 'rotateY(180deg)';
        setImageSrc(myImage);
    }
    return(
<section id="About-Me" className="scroll content-container" data-rate=".0" data-direction="vertical">
    <figure onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img className="portrait" ref={imgRef} src={imageSrc} alt="Photos of Me" />
    </figure>
        <div className="text">
            <div className="h2">
            <b>
                <h2>About Me</h2>
            </b>
            </div>
            <div className="p">
            <p></p>
            <ol>
            As an entrepreneur with a decade of success in the realm of small businesses, I've garnered a wealth of invaluable experiences. This journey has equipped me with a diverse skill set encompassing effective teamwork, adept client relationship management, goal-driven professionalism, and the achievement of significant milestones. However, the true enlightenment lies in the insights I've gained about my own identity and the essence of personal excellence.
            
            My venture into the world of development was driven by an ardent desire for perpetual growth and the pursuit of creativity. This pivotal shift prompted me to part ways with my business, channeling my fervor into the realm of continuous learning and innovation. A year after divesting my entrepreneurial pursuits, I achieved comprehensive proficiency by completing a rigorous full-stack development certification program at the University of Denver. With these credentials in hand, I stand primed to embark on my new role as a dedicated Developer.
            </ol>
            <br />
            <div className="h2lower">
            <b>
            <h2>Soft Skills</h2>
            </b>
            </div>
            <ol>
            ⭐ **Client-Centric Collaboration:** Drawing from my entrepreneurial background, I've mastered the art of harmonizing exacting client requirements within tight timeframes. This proficiency enables me to not only grasp clients' objectives but also navigate intricate challenges seamlessly, resulting in tailored solutions that surpass expectations.
            </ol>
            <br></br>
            <ol>
            ⭐ **Exemplary Interpersonal Proficiency:** Cultivating robust relationships with colleagues is a cornerstone of my professional ethos. Through fostering open communication and nurturing mutual respect, I create an environment conducive to streamlined collaboration and the achievement of remarkable solutions.
            </ol>
            <br></br>
            <ol>⭐ **Pursuit of excellence:** The pursuit of excellence defines my professional trajectory. By setting and exceeding standards for myself and my peers, I cultivate a culture of continuous enhancement and commitment to delivering exceptional results.</ol>
            <br></br>
            <ol> ⭐ **Catalyst for Growth and Innovation:** My propensity for fostering personal and professional advancement fuels curiosity and innovation by challenging myself and inspiring others.</ol>
            <br></br>
            <ol> ⭐ **Reliability and Adherence:** My commitment to project deadlines is stedfast, approaching each commitment with dedicated resolve to ensure on-time and on-target delivery.</ol>
            <br></br>
            <ol>⭐ **Resilience and Problem Solving:** Confronting challenges with a blend of inquisitiveness, humility, and resolve, I analyze issues from multiple angles. This approach allows me to leverage problem-solving to engineer creative resolutions, persistently driving toward success.</ol>
            <p />
            </div>
        </div>
</section>
    )
}
