[] Welcome screen <Component>
    [] You can press PLAY when the name is filled in <button> && turnery
    [] Clicking the name will allow to change it <input> && state
[] Playscreen <Component>
    [] Countdown from 30 seconds to 0
    [] 3x3 pictures <Component>
    [] Clicking a picture will show the next set
        [] All pictures should show up at the same time
        [] While the pictures are loading you could show a loading screen
        [] Or you could preload images in the background to prevent a delay for the player
        [] At least the player should not see images loading
[] Scoreboard <Component>
    [] The score formula is: Score = SUM(fox click) – SUM(dog or cat click) <globalState> of <prop>
[] After 30 seconds the player is directed to the scoreboard
    [] Rank
    [] Name
    [] Score
    [] Date