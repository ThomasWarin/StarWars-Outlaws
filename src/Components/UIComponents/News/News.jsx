/* eslint-disable react/prop-types */
// Import du style
import './News.scss';

function News({ id, picture, title, date, time, content, cta, state }) {
  return (
    <div className={`News ${state}`}>
      <picture className="News-picture">
        <img
          className="News-picture-image"
          src={picture}
          alt="News Illustration"
        />
      </picture>
      <h3 className="News-title">{title}</h3>
      <span className="News-informations">
        {date}
        {time ? ` | ${time}` : ''}
      </span>
      {content && <p className="News-content">{content}</p>}
      <a className="News-cta" href="#">
        {cta}
      </a>
    </div>
  );
}

export default News;
