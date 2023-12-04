// Import de React
import { useEffect, useState } from 'react';

// Import du style
import './Loader.scss';
import nyx from '../../assets/SWO-Nyx.png';
import backgroundStar from '../../assets/SWO-Background.png';
import logoSWO from '../../assets/SWO-Logo.png';

function Loader() {
  const styleBackground = {
    backgroundImage: `linear-gradient(
      90deg,
      transparent 0,
      rgba(0,0,0,.5) 20%,
      rgba(0,0,0,.5) 50%,
      rgba(0,0,0,.5) 80%,
      transparent),
      url(${backgroundStar})`,
  };
  const styleShadowTransition = {
    WebkitMaskImage: `url(${nyx})`,
    maskImage: `url(${nyx})`,
  };

  const [counterLoading, setCounterLoading] = useState(1);
  const counter = () => {
    return '.'.repeat(counterLoading);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounterLoading((prev) => (prev === 3 ? 1 : prev + 1));
    }, 1000); // Met à jour toutes les 1000 millisecondes (1 seconde)

    return () => clearInterval(intervalId);
  }, [counterLoading]);

  return (
    <div className="Loader" style={styleBackground}>
      <div className="Loader-nyxContainer">
        <img src={nyx} alt="SWO Nyx" className="Loader-nyxContainer__nyx" />
        <div
          className="Loader-nyxContainer__nyxShadow"
          style={styleShadowTransition}
        >
          <div className="transitionDiv" />
        </div>
      </div>
      <h1 className="Loader-title">
        Loading<span>{counter()}</span>
      </h1>
      <img src={logoSWO} alt="SWO Logo" className="Loader-logo" />
    </div>
  );
}

export default Loader;
