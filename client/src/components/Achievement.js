import React from "react";
import "./Achievement.css";

const Achievement = ({ entries }) => {
  let levelTracker;
  if (entries.length >= 0 && entries.length <= 6) {
    levelTracker = (
      <div className="achievementBox">
        <h4>Level 1: Junior Chef</h4>
        <h5>&#11088;</h5>
        <img
          width={180}
          height="auto"
          src="./helen.png"
          alt="junior chef"
        ></img>
        <p>
          {" "}
          Bravo! You're on your way to becoming a more mindful cooking master.{" "}
        </p>
        <h4>Mindfulness tip:</h4>
        <p>
          Eat slowly. If you like, you can close your eyes. Try to discriminate
          the textures as well as the taste. Can you separate the smell from the
          taste? Or do you have a unified experience of tasting something,
          combining these senses?
        </p>
      </div>
    );
  } else if (entries.length == 7) {
    levelTracker = (
      <div className="achievementBox">
        <h4>Level 2: Chef de Partie</h4>
        <h5>&#11088; &#11088;</h5>
        <img
          width={180}
          height="auto"
          src="./mhairi.png"
          alt="chef de partie"
        ></img>
        <p> Congratulations on your promotion! </p>
        <h4>Mindfulness tip:</h4>
        <p>
          Remove your smartphone from the kitchen. Attempting to do too many
          things at once decreases your ability to switch between tasks and
          makes you less able to focus on any one activity. Put your phone on
          silent and place it somewhere far away from the kitchen.
        </p>
      </div>
    );
  } else if (entries.length == 8) {
    levelTracker = (
      <div className="achievementBox">
        <h4>Level 3: Sous Chef</h4>
        <h5>&#11088; &#11088; &#11088;</h5>
        <img width={180} height="auto" src="./chefDavid.png" alt="sous chef"></img>
        <p> Wow, you're doing great!</p>
        <h4>Mindfulness tip:</h4>
        <p>
          Mindfulness Tip: Be aware of the food with all your senses. Instead of
          being lost in thought, allow yourself to be entirely present with the
          sounds, smells, textures, and physical sensations of the kitchen.
        </p>
      </div>
    );
  } else if (entries.length == 9) {
    levelTracker = (
        <div className="achievementBox">
        <h4>Level 4: Head Chef</h4>
        <h5>&#11088; &#11088; &#11088; &#11088;</h5>
        <img width={180} height="auto" src="./stephen.png" alt="head chef"></img>
        <p> Woah, you've been promoted to Head Chef! </p>
        <h4>Mindfulness tip:</h4>
        <p>
        Consciously think about each and every ingredient you
          cook with. When you become curious about the ingredients you're using,
          you'll begin to appreciate those ingredients more, and source and
          handle them with extra care and consideration.
        </p>
      </div>
    );
  } else if (entries.length >= 10 && entries.length <= 35) {
    levelTracker = (
        
      <div className="achievementBox">
        <p>
          You have reached level 5! After a month of mindful meals, you are now
          a Master of the Culinary Arts&#11088;&#11088;&#11088;&#11088;&#11088;
        </p>
        <br />
        <p>
          Mindfulness tip: With an attitude of mindfulness and appreciation, go
          to a wine tasting, to an olive oil store, or to a tea or coffee shop.
          Sample and savor the wine, the olive oil, or the tea. Or host your own
          mindful tasting party.
        </p>
      </div>
    );
  } else if (entries.length >= 36 && entries.length <= 40) {
    levelTracker = (
      <div className="achievementBox">
        <p>
          You have reached level 6! Holy moly! You are the envy of your peers!
        </p>
        <br />
        <p>
          Mindfulness tip: From the moment you step into the kitchen, anchor
          your mind on the physical senses and the task at hand. Be aware of how
          your mood changes, and after you have observed how your mind behaves,
          gently bring your concentration back to the sounds and smells of the
          food you're cooking.
        </p>
      </div>
    );
  } else if (entries.length >= 41) {
    levelTracker = (
      <div className="achievementBox">
        <p>You have reached level 7! One step closer to culinary godhood!</p>
        <br />
        <p>
          Mindfulness tip: Put a small amount of various loose teas in glasses
          or small bowls. Close your eyes and smell each sample. You can do this
          with other foods and drink. Try wine or single-malt scotch. Or some
          herbs and spices.
        </p>
      </div>
    );
  }

  return <>{levelTracker}</>;
};

export default Achievement;
