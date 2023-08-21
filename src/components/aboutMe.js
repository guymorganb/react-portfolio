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
                I became a developer to create innovative tools which enhance people's
                lives. After 7 years as a business leader, I embraced my appetite for
                continuous learning and a desire to create. A year after selling my
                business, I have completed my full-stack development certification at
                the University of Denver and am ready to take on my first role as a
                Developer.
                <br />
                <br />I look forward to working collaboratively with a team that is
                inspired by their company’s vision and leverages innovative tools
                which enhance life for clients and users alike!.
            </ol>
            <br />
            <ol>My Skills:</ol>
            <ol>
                💥JavaScript ES6+, jQuery, Nodejs, Expressjs, Bootstrap, Tailwind CSS,
                React, MongoDB, MySQL, SQL, HTML5, CSS3, Agile, UI/UX (User
                Interface/User Experience), GitHub, Figma, Miro, Promises, API,
                (Application Program Interface), CCC1, AutoDesk, Excel, Word,
                Programming, Teamwork, Critical Thinking, Problem Solving, RestFul
                API, Windows, MAC, Linux, Java, Docker, Python
            </ol>
            <br />
            <ol>My Superpowers:</ol>
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
