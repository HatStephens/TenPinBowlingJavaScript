Ten Pin Bowling
===============
## Description
This is a fully working and tested game. A game can be initiated per player.

It has been written in JavaScript and fully tested in Jasmine. 43 Specs in total.

The first version of the game had 10 Turns (frames) and then initiated a potential 11th and 12th turn if the final Turn was a Strike or Spare.

I have then gone back and refactored this so there are only 10 Turns (frames). To achieve this I created a new Final Turn class which was initialised with three Bowls rather than two.

##### Further tasks
There are some cases of repetition that I could look at taking out. I am also determined to streamline the Final Turn as it is very similar to a normal Turn so again there is repetition.