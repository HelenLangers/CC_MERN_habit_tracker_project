import React from 'react'
import "./Achievement.css"

const Achievement = ({entries}) => {


    let levelTracker 
    if (entries.length >= 0 && entries.length <= 4) {
        levelTracker =
        <div className='achievementBox'>
            <p>Level 1: Junior Chef - On your way to becoming a more mindful cooking master &#11088;</p><br/>
            <p>Mindfulness tip: Slowly eat your meals. Close your eyes, if you like. Try to discriminate the textures as well as the taste. Can you separate the smell from the taste? Or do you have a unified experience of tasting something, combining these senses?</p>
        </div>
    }
    else if (entries.length >= 5 && entries.length <= 8) {
        levelTracker =
        <div className='achievementBox'>
            <p>Congratulations: You have reached Level 2 and have been promoted to Chef de Partie!&#11088;&#11088;<i class="fa-light fa-hat-chef"></i></p><br/>
            <p>Mindfulness tip: Remove your smartphone from the kitchen. Attempting to do too many things at once decreases your ability to switch between tasks and makes you less able to focus on any one activity. Put your phone on silent and place it somewhere far away from the kitchen.</p>
        </div>
    } else if (entries.length >=9 && entries.length <= 14) {
        levelTracker =
        <div className='achievementBox'>
            <p>You have reached Level 3! You have been promoted to Sous Chef!&#11088;&#11088;&#11088;</p><br/>
            <p>Mindfulness Tip: Be aware of the food with all your senses. Instead of being lost in thought, allow yourself to be entirely present with the sounds, smells, textures, and physical sensations of the kitchen.</p>
        </div>
    } else if (entries.length >=15 && entries.length <= 25) {
        levelTracker =
        <div className='achievementBox'>
            <p>Woah! You have reached level 4 and have been promoted to Head Chef! &#11088;&#11088;&#11088;&#11088;</p><br/>
            <p>Mindfulness tip: Consciously think about each and every ingredient you cook with. When you become curious about the ingredients you're using, you'll begin to appreciate those ingredients more, and source and handle them with extra care and consideration.</p>
        </div>
    } else if (entries.length >=26 && entries.length <= 35) {
        levelTracker =
        <div className='achievementBox'>
            <p>You have reached level 5! After a month of mindful meals, you are now a Master of the Culinary Arts&#11088;&#11088;&#11088;&#11088;&#11088;</p><br/>
            <p>Mindfulness tip: With an attitude of mindfulness and appreciation, go to a wine tasting, to an olive oil store, or to a tea or coffee shop. Sample and savor the wine, the olive oil, or the tea. Or host your own mindful tasting party.</p>
        </div>
    } else if (entries.length >=36 && entries.length <= 40) {
        levelTracker =
        <div className='achievementBox'>
            <p>You have reached level 6! Holy moly! You are the envy of your peers!</p><br/>
            <p>Mindfulness tip: From the moment you step into the kitchen, anchor your mind on the physical senses and the task at hand. Be aware of how your mood changes, and after you have observed how your mind behaves, gently bring your concentration back to the sounds and smells of the food you're cooking.</p>
        </div>
    } else if (entries.length >=41) {
        levelTracker =
        <div className='achievementBox'>
            <p>You have reached level 7! One step closer to culinary godhood!</p><br/>
            <p>Mindfulness tip: Put a small amount of various loose teas in glasses or small bowls. Close your eyes and smell each sample. You can do this with other foods and drink. Try wine or single-malt scotch. Or some herbs and spices.</p>
        </div>
    }




  return (
    <>
    {levelTracker}
    </>
  )
}

export default Achievement