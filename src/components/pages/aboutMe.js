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
            Throughout my career, I've consistently sought to develop a multifaceted skill set, encompassing teamwork, problem-solving, and cross-domain collaboration, paired with deep technical expertise. My journey, fueled by a passion for science and technology, has been marked by the continuous pursuit of diverse experiences and learning opportunities.
            </ol>
            <br />
            <ol>
            As a Manager in a small automotive business, I honed my soft skills and excelled in relationship building, engaging with major clients like Chevrolet, BMW, Nissan, and Ford. This role sharpened my attention to detail and communication skills across various levels, from corporate offices to front-line workers, contributing to a significant $2M annual revenue increase.
            </ol>
            <br />
            <ol>
            Driven by a thirst for growth, I launched my own startup while continuing my college education. This transformative experience revealed my commitment to excellence, rapid learning abilities, and proficiency in solving complex problems, leading to substantial business growth. However, balancing entrepreneurship and education led to a temporary divergence from my academic aspirations.
            </ol>
            <br />
            <ol>
            My tenure at a Mortgage Bank further expanded my skill set, particularly in remote teamwork, meticulous auditing of tax documents, and financial data analysis, enhancing my understanding of complex financial operations.
            </ol>
            <br />
            <ol>
            My progression continued with ongoing education, online certifications, and freelance development work and continued training and development. I've deepened my expertise in Java, JavaScript, Python, full-stack web development, IT Managment and Cloud technologies
            </ol>
            <br />
            <ol>
            I excel in dynamic, fast-paced settings, embracing challenges as opportunities for personal and professional growth. My ability to manage change and solution-driven approach to complex problems distinguish me.
            In addition to my full stack web development certification from the University of Denver, I am a junior Computer Science student at Florida International University. I actively engage in the local tech community through meetups, peer code reviews, and teaching, underscoring my commitment to continuous learning and collaboration.
            </ol>
            <br />
            <div className="h2lower">
            <b>
            <h2>Leadership & Project Management</h2>
            </b>
            </div>
            <ol>
            ⭐ Strategic IT Project Leadership: Demonstrated proficiency in leading IT projects from conception to deployment, leveraging skills in cloud infrastructure, web development, and full-stack technologies. My experience as a freelance developer involved orchestrating complex projects, ensuring alignment with technical requirements and client objectives.
            </ol>
            <br></br>
            <ol>
            ⭐ Team Development and Mentorship: As a founder and business leader, I excelled in building, guiding, and mentoring teams, driving them towards achieving significant business goals, including substantial revenue growth. My leadership style fosters a culture of continuous learning and improvement.
            </ol>
            <br></br>
            <ol>⭐ Cross-Functional Team Coordination: Experienced in managing cross-functional teams and liaising between various stakeholders, as evidenced in my role in the automotive industry and security at Amazon. I effectively balanced and integrated diverse team efforts to enhance operational efficiency and compliance.</ol>
            <br></br>
            <ol> ⭐ Client Relationship Management: Skilled in cultivating and managing client relationships across different industries. My background in freelance development and business management has honed my ability to understand and meet client needs, leading to successful project outcomes and client satisfaction.</ol>
            <br></br>
            <ol> ⭐ Adaptability in Dynamic Environments: Proven ability to adapt to changing project demands and technological landscapes, maintaining project momentum and ensuring timely delivery.</ol>
            <br></br>
            <ol>⭐ Effective Communication and Collaboration: My professional journey underscores my ability to communicate effectively with team members, clients, and stakeholders, facilitating clear understanding and collaborative efforts towards common goals.</ol>
            <p />
            </div>
        </div>
</section>
    )
}
