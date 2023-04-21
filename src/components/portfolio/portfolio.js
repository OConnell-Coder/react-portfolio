import './portfolio.css';
import apps from './application';

const Portfolio = () =>
    <div>
        <h1>Portfolio</h1>
        <div id="projects">
            {/* {console.log(apps)} */}
        {apps.map(({key, title, img, description, website}) => 
            <div className='application' key={key}>
                <img target='_blank' src={img} alt={title} />
                <div className='description'>
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <a href='{website}' target='_blank'></a>
                </div>
            </div>

        )}

        </div>

    </div>
;

export default Portfolio;