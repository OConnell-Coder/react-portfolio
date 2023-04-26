import './about.css';
import myImg from './images/profile-pic.jpeg';

const About = () =>
    <div id="about-me">
        <h1>About Me</h1>
        <div id="bio-card">
            <div id="bio-pic">
             <img target='_blank' src={myImg} alt="my profile picture"></img>
            </div>
            <p>
                Growing up, I was always told that I "think like a robot." I suppose I took that to heart (or should I say to my PSU) because I decided to learn how to talk to computers.
                I learned full-stack developer skills from the University of Pennsylvania's LPS Coding Bootcamp.
            </p>
            <p>
                At first, it was a drastic change from my previous careers as an English Professor and a Corporate Accountant.
                But I quickly found that both careers played a foundational role to my understanding of coding.
                From English, I brought creativity, a propensity for syntax and grammar, and a constant conceptualization of how form and design informs function and communication.
                From Accounting, I brought efficiency, accuracy, and precision, in a field where attention-to-detail is equally critical.
            </p>
        </div>
    </div>
;

export default About;