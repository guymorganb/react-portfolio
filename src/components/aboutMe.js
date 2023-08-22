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
                Being a sucessful small business entrapanuer for 10 years taught me a multitude
                things including how to work with others, client relationship managment,
                goal setting as a professional, about reaching milestones and many more, 
                but the greatest lessons were those I learned about myself, and what makes me the best version of me.
                I became a developer to create innovative tools which enhance people's
                lives. I sold my business to embraced my appetite for continuous learning and need to create. 
                A year after selling my business, I have completed my full-stack development 
                certification at the University of Denver and am ready to secure a role as a
                Developer.
                <br />
                <br />Working collaboratively with a team excites me, one that is
                inspired by their company’s vision and leverages cutting edge tools
                to enhance life for clients and users!.
            </ol>
            <br />
            <div className="h2">
            <b>
            <h2>Soft Skills</h2>
            </b>
            </div>
            <ol>
                ⭐ Working with business clients to meet exacting needs on tight
                timelines.
            </ol>
            <ol>
                ⭐ Developing strong co-working relationships to collaborate and
                deliver exceptional solutions.
            </ol>
            <ol>⭐ Setting and meeting high expectations. </ol>
            <ol>⭐ Challenging myself and others to learn, grow, and innovate.</ol>
            <ol>⭐ Meeting deadlines.</ol>
            <ol>⭐ Approaching problems with curiosity, humility, and tenacity.</ol>
            <p />
            </div>
        </div>
</section>
    )
}
