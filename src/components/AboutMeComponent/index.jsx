import './index.css';
import { forwardRef } from 'react';

const AboutMeComponent = forwardRef((props, ref) => {
    return (
        <div className="aboutMe" ref={ref}>
            <p>My programming journey began in 2019, driven by a passion for technology and creativity. I initially immersed myself in game development, where I learned the fundamentals of coding and design while bringing virtual worlds to life. This experience ignited my curiosity and motivated me to explore other areas of software development.</p>
            <p>After my foray into game development, I shifted my focus to Android development. This allowed me to dive into mobile app creation, learning about user interfaces, functionality, and the unique challenges of mobile platforms. Each project expanded my understanding of programming and solidified my desire to build engaging digital experiences.</p>
            <p>As of 2023, I've turned my attention to web development. The web is an ever-evolving landscape, and I am excited about the opportunities it presents. My goal is to master the art of web development, combining my skills in programming with a keen eye for design. I am dedicated to creating responsive and dynamic web applications that not only meet users' needs but also deliver a seamless experience.</p>
            <p>I am committed to continuous learning, always seeking new knowledge and staying updated with the latest technologies and best practices. My ambition is to become one of the best web developers, contributing to innovative projects and collaborating with like-minded individuals in the tech community.</p>
            <div className='linear'></div>
            <h3>Skills</h3>
            <ul className='skillList'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git/GitHub</li>
                <li>Node.js</li>
                <li>C++</li>
                <li>Kotlin</li>
                <li>Python</li>
            </ul>
        </div>
    );
});

export default AboutMeComponent;
