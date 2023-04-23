import img1 from './images/Hey-Boo-Boo.png';
import img2 from './images/Random-Movie-Night.png';
import img3 from './images/Coding-Quiz.png'
import img4 from './images/Work-Day-Scheduler.png';
import img5 from './images/weather-dashboard-screenshot.png';
import img6 from './images/note-taker-app.png';

const apps = [
    {
        key: 1,
        title: 'Hey Boo-Boo Picnic Planner',
        img: `${img1}`,
        description: 'This group project showcases our skills with Express, MySQL, Sequelize, and Handlebars.',
        repo: 'https://github.com/miacias/hey-boo-boo',
        website: 'https://lit-river-34902.herokuapp.com/'
    },
    {
        key: 2,
        title: 'Random Similar Movie Picker with Trailers',
        img: `${img2}`,
        description: 'This group project showcases our skills with HTML, CSS, JavaScript, and third-party API calls.',
        repo: 'https://github.com/skullkid4200/Random-Similar-Movie-Generator',
        website: 'https://skullkid4200.github.io/Random-Similar-Movie-Generator/'
    },
    {
        key: 3,
        title: 'Timed Coding Quiz',
        img: `${img3}`,
        description: 'I designed this fun timed coding quiz to test my front-end skills!',
        repo: 'https://github.com/OConnell-Coder/timed-coding-quiz',
        website: 'https://oconnell-coder.github.io/timed-coding-quiz/'
    },
    {
        key: 4,
        title: 'Work Day Scheduler',
        img: `${img4}`,
        description: 'I designed this work day scheduler to practice data persistance and JS logic.',
        repo: 'https://github.com/OConnell-Coder/work-day-scheduler',
        website: 'https://oconnell-coder.github.io/work-day-scheduler/'
    },
    {
        key: 5,
        title: 'Weather Dashboard',
        img: `${img5}`,
        description: "I designed this weather dashboard to utilize my front-end skills and API interactions. This won't work without an active API key.",
        repo: 'https://github.com/OConnell-Coder/weather-dashboard',
        website: 'https://oconnell-coder.github.io/weather-dashboard/'
    },
    {
        key: 6,
        title: 'Note Taker App',
        img: `${img6}`,
        description: 'I designed this note taker app to practice JS logic and Heroku deployment.',
        repo: 'https://github.com/OConnell-Coder/note-taker',
        website: 'https://note-taker-24601.herokuapp.com/'
    },
]

export default apps;