/* eslint-disable react/prop-types */
// Import du style
import './Article.scss';

function Article({ picture, title, content }) {
  const stylePicture = {
    backgroundImage: `linear-gradient(
      90deg,
      rgba(0,0,0,.25) 0%,
      transparent 10%,
      transparent 90%,
      rgba(0,0,0,.25) 100%),
      linear-gradient(
        180deg,
        transparent 0%,
        transparent 60%,
        rgb(0,0,0) 90%),
      url('${picture}')`,
  };

  return (
    <article className="Article">
      <div className="Article-container">
        <div className="Article-image" style={stylePicture} />
        <h3 className="Article-title">{title}</h3>
        <p className="Article-content">{content}</p>
      </div>
    </article>
  );
}

export default Article;
