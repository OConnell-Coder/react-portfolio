import './portfolio.css';
import apps from './application';

const Portfolio = () =>
    <div>
        <h1>Portfolio</h1>
        <div id="projects">
            {/* {console.log(apps)} */}
        {apps.map(({key, title, img, description, repo, website}) => 
            <div className='application' key={key}>
                <img target='_blank' src={img} alt={title} />
                <div className='description'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href={repo} target='_blank'>GitHub Repo Link</a>
                    <div>
                        <a href={website} target='_blank'>Deployed Website Link</a>
                    </div>
                </div>
            </div>
        )}
        </div>

    </div>
;

export default Portfolio;