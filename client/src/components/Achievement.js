import React from 'react'

const Achievement = ({entries}) => {


    let levelTracker 
    if (entries.length >= 5 && entries.length <= 7) {
        levelTracker =
        <div>
            <p>Congratulations: You have reached Level 1.</p>
            <p>Mindfulness tip: Remove your smartphone from the kitchen. Attempting to do too many things at once decreases your ability to switch between tasks and makes you less able to focus on any one activity. Put your phone on silent and place it somewhere far away from the kitchen.</p>
        </div>
    } else if (entries.length >=8 && entries.length <= 15) {
        levelTracker =
        <div>
            <p>Congratulations! You have reached Level 2!</p>
            <p>Mindfulness Tip: Be aware of the food with all your senses. Instead of being lost in thought, allow yourself to be entirely present with the sounds, smells, textures, and physical sensations of the kitchen.</p>
        </div>
    } else if (entries.length >=16 && entries.length <= 30) {
        levelTracker =
        <div>
            <p>Woah! You have reached level 3!</p>
            <p>Mindfulness tip: Consciously think about each and every ingredient you cook with. When you become curious about the ingredients you're using, you'll begin to appreciate those ingredients more, and source and handle them with extra care and consideration.</p>
        </div>
    } else if (entries.length >=31) {
        levelTracker =
        <div>
            <p>You have reached level 4! After a month of mindful meals, you are now the master</p>
            <p>Mindfulness tip: From the moment you step into the kitchen, anchor your mind on the physical senses and the task at hand. Be aware of how your mood changes, and after you have observed how your mind behaves, gently bring your concentration back to the sounds and smells of the food you're cooking.</p>
        </div>
    }




  return (
    <>
    {levelTracker}
    </>
  )
}

export default Achievement