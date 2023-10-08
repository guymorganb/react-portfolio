import React, {useState, useRef} from "react";
import myImage from '../../assets/Third.jpeg'
import myImage2 from '../../assets/First.jpeg'


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
            Over the course of my career, I've sought to hone a diverse skill set encompassing exceptional teamwork, structured problem-solving, collaboration across work domains, and technical expertise. While my previous roles have provided me with a firm foundation, my deep-rooted passion for science and technology is the inspiration for my journey, so I've whittled away at it demonstrating the value of a diverse background.
            </ol>
            <br />
            <ol>
            Early on as a Manager for a small automotive business I was able to hone my soft skills, and relationship building, while simultaneously being exposed to large clients such as Chevrolet, BMW, Nissan and Ford. I learned the importance of being attentive to details, working with and communicating with diverse stakeholders from the corporate office, all the way down to the individual worker. I helped this small business increase annual revenue by over $2M.
            </ol>
            <br />
            <ol>
            My hunger for growth continued so I formed a start-up which allowed me to also continue my college education. Running my own start-up was transformative, and showed me aspects of myself I never knew. Primarily, my commitment to excellence, the quickness and efficiency at which I’m able to learn complex things and find high quality solutions to bewildering problems. These abilities shined and my business grew. This role helped me progress in my college curriculum, but eventually the demands had also cost me the ability to attend college creating a divergence from my primary goals of honing myself.  
            </ol>
            <br />
            <ol>
            After this divergence, I took necessary steps and joined up with a Mortgage Bank, here I was able to expand my skill set of working with a team in a remote environment and expand my focus through meticulously auditing tax documents and analyzing financial data.
            </ol>
            <br />
            <ol>
            Since that time I’ve progressed further, through continuing education and online certifications, continuing my accumulation of college credits and certifications, I have been working as a freelance developer. Continuously devloping a skill set with the coding languages of Java, JavaScript, Python as well as full-stack web development, and Data Structures & Algorithms. I have also delved into database deployment and I’m currently immersed in the process of learning how to fine-tune Large Language Models and looking forward to my upcoming courses in distributed systems from Deft University of Technology. 
            </ol>
            <br />
            <ol>
            I thrive in dynamic, fast-paced environments and readily embrace challenges as opportunities for personal and professional growth. My ability to adapt quickly, drive solutions to complex problems and my innate work energy bring an X-factor that distinguishes me among my peers. 
            
            In addition to being certified in full stack web development from the University of Denver, Im a junior CS student with Florida Intenational University, I hold regular meetups in the metro area near my home and regualrly engage in code reviews with my peers, help teach what Ive learned to others and keep myself maluable to engage continuous learning.

            </ol>
            <br />
            <div className="h2lower">
            <b>
            <h2>Soft Skills</h2>
            </b>
            </div>
            <ol>
            ⭐ **Client-Centric Collaboration:** Drawing from my foundational background, I've mastered the art of exacting client requirements within required timeframes. This enables me to grasp clients' objectives but also navigate intricate challenges, resulting in solutions that surpass expectations.
            </ol>
            <br></br>
            <ol>
            ⭐ **Interpersonal Proficiency:** Cultivating relationships with colleagues is a cornerstone of my professional ethos. Through fostering open communication and nurturing mutual respect, I create an environment conducive to streamlined collaboration and the achievement of remarkable solutions.
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
