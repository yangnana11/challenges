Instructions from your teacher:
Even while staying home, it's important to keep a balanced routine of fun and healthy activities! Write a function quarantineSchedule that receives as input parameter a string, and produces outputs according to the following table:
_______________________________

| Day                  | Activity              |

| "Monday"             | "Read"                |

| "Wednesday"          | "Puzzles"            |

| "Friday"             | "Netflix"             |

| "Sunday"             | "Exercise"          |

| *anything else*     | "Code"               |
----------------------------------------------

Note: *anything else* is the default case- if the input to the function is not any of the values in the table, then the return value should be "Code"

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, quarantineSchedule("mOnDaY") should still return "Read"


-----------------------------------------

Instructions from your teacher:
Spending time safely at home means it's more important now more than ever to get some exercise in, whether it's simple jumping jacks in the house or a long Zoom yoga session. You and your roommates have cut a deal: exercise for at least 30 minutes a day for at least half of the week, or take out the trash at the end of the week!

Write a function trashDuty that determines which roommates won't have to take out the week's trash, depending on how long they've exercised this week.

This function will accept two arguments:

An object exerciseMins where the keys are the roommate names and the values are arrays of minutes exercised for that day. Each array will have 7 elements, for the 7 days of the week.
A callback exerciseChecker that checks if the exercised minutes is enough. Remember the deal: anything 30 minutes and over is enough, while anything below 30 is not.

The callback will return true for passing minutes and false for not enough minutes exercised.

Your function should return an array containing the names of the roommates who DON'T have to take out the trash for that week.

For example, invoking trashDuty on the example object below with your exerciseChecker callback would return ['Mike'], because Mike has exercised 30 minutes or more for more than half the week, 
and therefore doesn't have to take out the trash for the week.

const exerciseMinsExample = {

    'Mike': [60, 80, 25, 45, 10, 60, 30],

    'Chris': [0, 15, 45, 20, 90, 15, 0]

};

------------------------
Instructions from your teacher:
Since everyone is making baking at home, you decide to treat yourself! You check if you have certain ingredients to make some cinnamon rolls from the recipe video you saw online. 

Write a function that takes in an ingredient you're looking for, and an object of key/value 
pairs where the location is the key and the ingredient (that you actually do have in that location) is the value. 
If the inputted ingredient is found, the function should return "You found {ingredient} in the the {location}" 
If the inputted ingredient isn't found, return "oof, you ran out :(" 

ex: 
const specificIngredient = { 'closet' : 'flour' } 

console.log(bakingIngredients(specificIngredient, 'flour')) 
--> "You found flour in the closet" 

console.log(bakingIngredients(specificIngredient, 'vanilla extract')) --> 
"oof, you ran out :("