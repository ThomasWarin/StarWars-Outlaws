/* eslint-disable no-param-reassign */
// Import de React
import { useState } from 'react';
import Neons from '../UIComponents/Neons/Neons';
import News from '../UIComponents/News/News';

// Import du style
import './GameNews.scss';
import news1 from '../../assets/news/SWO_ConceptArt_Kijimi_Reduce.png';
import news2 from '../../assets/news/SWO_ConceptArt_Toshara_Reduce.png';
import news3 from '../../assets/articles/SWO_InEngine_Become a Galactic Scoundrel_Reduce.png';
import arrows from '../../assets/arrows.svg';

function GameNews() {
  const [inProgressCarousel, setInProgressCarousel] = useState(false);
  const [counter, setCounter] = useState(1);

  const goToPreviousSlide = () => {
    if (!inProgressCarousel) {
      setInProgressCarousel(true);
      const currentSlide = document.querySelector('.current');
      const previousSlide = document.querySelector('.previous');
      const nextSlide = document.querySelector('.next');

      currentSlide.classList.add('left');
      previousSlide.classList.add('left');
      nextSlide.classList.add('left');

      if (counter > 1) {
        setCounter(counter - 1);
      } else {
        setCounter(3);
      }

      setTimeout(() => {
        currentSlide.classList.remove('left');
        previousSlide.classList.remove('left');
        nextSlide.classList.remove('left');

        currentSlide.classList.remove('current');
        previousSlide.classList.remove('previous');
        nextSlide.classList.remove('next');

        currentSlide.classList.add('next');
        previousSlide.classList.add('current');
        nextSlide.classList.add('previous');

        setInProgressCarousel(false);
      }, 300);
    }
  };
  const goToNextSlide = () => {
    if (!inProgressCarousel) {
      setInProgressCarousel(true);
      const currentSlide = document.querySelector('.current');
      const previousSlide = document.querySelector('.previous');
      const nextSlide = document.querySelector('.next');

      currentSlide.classList.add('right');
      previousSlide.classList.add('right');
      nextSlide.classList.add('right');

      if (counter < 3) {
        setCounter(counter + 1);
      } else {
        setCounter(1);
      }

      setTimeout(() => {
        currentSlide.classList.remove('right');
        previousSlide.classList.remove('right');
        nextSlide.classList.remove('right');

        currentSlide.classList.remove('current');
        previousSlide.classList.remove('previous');
        nextSlide.classList.remove('next');

        currentSlide.classList.add('previous');
        previousSlide.classList.add('next');
        nextSlide.classList.add('current');

        setInProgressCarousel(false);
      }, 300);
    }
  };

  const newsArray = [
    {
      id: 1,
      picture: news1,
      title: 'The Star Wars Outlaws fan kit is here!',
      date: '30 July 2023',
      time: '1 min read',
      content: 'Delve deeper into Star Wars Outlaws with our Fan Kit.',
      cta: 'Read more',
    },
    {
      id: 2,
      picture: news2,
      title:
        'Star Wars Outlaws: Behind The Scenes - Crafting a Galaxy of Opportunity',
      date: '23 July 2023',
      time: '',
      content: '',
      cta: 'Watch now',
    },
    {
      id: 3,
      picture: news3,
      title: 'A thank you from the team',
      date: '18 July 2023',
      time: '3 min read',
      content:
        'Your support and positivity following the worldwide reveal has been overwhelming and our team would like to take some time to thank all of you ahead of San Diego Comic Con.',
      cta: 'Read more',
    },
  ];
  const newsData = newsArray;
  newsData.forEach((news) => {
    if (news.id === 1) {
      news.state = 'current';
    }
    if (news.id === 2) {
      news.state = 'next';
    }
    if (news.id === 3) {
      news.state = 'previous';
    }
  });

  return (
    <section className="GameNews">
      <Neons />
      <h2 className="GameNews-title">Latest News</h2>
      <div className="GameNews-carousel">
        {newsData.map((news) => (
          <News key={news.id} {...news} />
        ))}
      </div>
      <div className="GameNews-carousel-buttons">
        <button
          type="button"
          className="button-previous"
          onClick={goToPreviousSlide}
        >
          <img src={arrows} alt="Left Arrows" />
        </button>
        <span className="GameNews-carousel-counter">
          {counter}/{newsData.length}
        </span>
        <button type="button" className="button-next" onClick={goToNextSlide}>
          <img src={arrows} alt="Right Arrows" />
        </button>
      </div>
    </section>
  );
}

export default GameNews;
