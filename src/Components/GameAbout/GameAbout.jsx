// Import du style
import './GameAbout.scss';
/// Articles
import article1 from '../../assets/articles/SWO_InEngine_Discover a Galaxy of Opportunity_Reduce.png';
import article2 from '../../assets/articles/SWO_InEngine_Become a Galactic Scoundrel_Reduce.png';
import article3 from '../../assets/articles/SWO_InEngine_Embark on High-stakes Missions_Reduce.png';
import article4 from '../../assets/articles/SWO_InEngine_Jump into the Pilot Seat_Reduce.png';

// Import de React
import Neons from '../UIComponents/Neons/Neons';
import Article from '../UIComponents/Article/Article';

function GameAbout() {
  return (
    <section className="GameAbout">
      <Neons />
      <h2 className="GameAbout-title">About the game</h2>
      <p className="GameAbout-content">
        Experience the first-ever open world Star Wars™ game, set between the
        events of <span>The Empire Strikes Back</span> and{' '}
        <span>Return of the Jedi</span>. Explore distinct planets across the
        galaxy, both iconic and new. Risk it all as Kay Vess, a scoundrel
        seeking freedom and the means to start a new life, along with her
        companion Nix. Fight, steal, and outwit your way through the galaxy’s
        crime syndicates as you join the galaxy’s most wanted.
      </p>
      <p className="GameAbout-content">
        If you’re willing to take the risk, the galaxy is full of opportunity.
      </p>

      <div className="GameAbout-articles">
        <Article
          picture={article1}
          title="Discover a galaxy of opportunity"
          content="Explore distinct planets with bustling cities and cantinas before racing across sprawling outdoor landscapes on your speeder. Each planet brings new adventures, unique challenges, and enticing rewards if you’re willing to take the risk."
        />
        <Article
          picture={article2}
          title="Experience an original scoundrel story"
          content="Live the high-stakes lifestyle of an outlaw. With Nix by your side, turn any situation to your advantage: fight with your blaster, overcome with stealth and gadgets, or find the right moments to distract foes and gain the upper hand."
        />
        <Article
          picture={article3}
          title="Embark on high-stakes missions"
          content="Take on high-risk, high-reward missions from the galaxy’s crime syndicates. Steal valuable goods, infiltrate secret locations, and outwit enemies as one of the galaxy’s most wanted. Every choice you make influences your ever-changing reputation."
        />
        <Article
          picture={article4}
          title="Jump into the pilot seat"
          content="Pilot your ship, The Trailblazer, as you engage in thrilling dogfights with The Empire and other foes, finding the right opportunities to chase, evade, and attack to get the upper hand."
        />
      </div>
    </section>
  );
}

export default GameAbout;
