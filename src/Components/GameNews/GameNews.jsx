// Import de React
import { useState } from 'react';
import Neons from '../UIComponents/Neons/Neons';
import News from '../UIComponents/News/News';

// Import du style
import './GameNews.scss';
import news1 from '../../assets/news/SWO_ConceptArt_Kijimi_Reduce.png';
import news2 from '../../assets/news/SWO_ConceptArt_Toshara_Reduce.png';
import news3 from '../../assets/articles/SWO_InEngine_Become a Galactic Scoundrel_Reduce.png';

function GameNews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="GameNews">
      <Neons />
      <h2 className="GameNews-title">Latest News</h2>
      <div
        className="GameNews-slider"
        style={{
          transform: `translateX(calc(-${currentSlide} * 100% + ${currentSlide} * -40px))`,
        }}
      >
        <News
          picture={news1}
          title="The Star Wars Outlaws fan kit is here!"
          date="30 July 2023"
          time="1 min read"
          content="Delve deeper into Star Wars Outlaws with our Fan Kit."
          cta="Read more"
        />
        <News
          picture={news2}
          title="Star Wars Outlaws: Behind The Scenes - Crafting a Galaxy of Opportunity"
          date="23 July 2023"
          time=""
          content=""
          cta="Watch now"
        />
        <News
          picture={news3}
          title="A thank you from the team"
          date="18 July 2023"
          time="3 min read"
          content="Your support and positivity following the worldwide reveal has been overwhelming and our team would like to take some time to thank all of you ahead of San Diego Comic Con."
          cta="Read more"
        />
      </div>
      <div className="GameNews-slider-buttons">
        <button
          type="button"
          className="button-previous"
          onClick={goToPreviousSlide}
        >
          Left
        </button>
        <span className="GameNews-slider-counter">
          {currentSlide + 1}/{totalSlides}
        </span>
        <button type="button" className="button-next" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </section>
  );
}

export default GameNews;
