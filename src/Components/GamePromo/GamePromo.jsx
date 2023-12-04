// Import du style
import './GamePromo.scss';
import backgroundMobile from '../../assets/SWO-MobileWallpaper.jpg';

function GamePromo() {
  const styleBackground = {
    backgroundImage: `linear-gradient(
      180deg,
      rgba(0,0,0,.85) 0%,
      transparent 10%,
      transparent 50%,
      rgba(0,0,0,1) 70%,
      rgba(0,0,0,1) 100%
      ),
      url(${backgroundMobile})`,
  };

  return (
    <main className="GamePromo" style={styleBackground}>
      <div className="GamePromo-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/ymcpwq1ltQc?si=TRI3m5HNoBJOfKT5"
          title="Star Wars Outlaws: Official World Premiere Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        />
      </div>
      <h2 className="GamePromo-titleVideo">
        Watch the world premiere cinematic trailer
      </h2>
    </main>
  );
}

export default GamePromo;
