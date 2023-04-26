import './resume.css';
import img from './assets/resume-icon.png';
import pdf from './assets/oconnell-resume.pdf';

const Resume = ({setPage}) =>
    <div id="resume-main">
        <div id="resume-dwnld">
            <h3>Click image to download resume!</h3>
            <a href={pdf} download>
                <img src={img} alt="resume"/>
            </a>
        </div>
        <div id="skills-list">
            <div>
                <h3>Coding Languages</h3>
                <ul>
                    <li>JavaScript and TypeScript</li>
                    <li>HTML and CSS</li>
                </ul>
            </div>
            <div>
                <h3>Tools & Packages</h3>
                <ul>
                    <li>Node, Express, and Handlebars</li>
                    <li>React</li>
                    <li>MySQL and Sequelize</li>
                    <li>NoSQL, MongoDB, and Mongoose</li>
                    <li>API's (third-party and server-side)</li>
                    <li>Bootstrap and Bulma</li>
                    <li>Git, GitHub, GitLab, gh-pages</li>
                    <li>Heroku, Insomnia, MongoDB Compass</li>
                    <li>VSCode</li>
                </ul>
            </div>
            <div>
                <h3>Coding Skills</h3>
                <ul>
                    <li>MERN Full-Stack Programming</li>
                    <li>MVC Framework</li>
                    <li>Agile methods</li>
                    <li>Pair Programming and group projects</li>
                </ul>
            </div>
        </div>
    </div>
;

export default Resume;