const yourIngredients = {
    'spice rack': 'cinnamon',
    'closet': 'flour',
    'cabinet': 'brown sugar',
    'fridge door': 'eggs',
    'closet shelf': 'chocolate chips',
    'lower cabinet': 'baking soda',
    'drawer': 'yeast',
    'cupboard': 'vanilla extract',
    'table': 'salt',
    'fridge': 'milk'
}

function bakingIngredients(ingredientYouNeed, locationsOfIngredients) {
  for (let key in locationsOfIngredients) {
    if (locationsOfIngredients[key] == ingredientYouNeed)
      return "You found "+ingredientYouNeed+" in the "+key;
  }
  return "oof, you ran out :(";
  
}


//Uncomment the code below to test:
console.log(bakingIngredients('flour', yourIngredients)) //--> You found flour in the closet
console.log(bakingIngredients('brown sugar', yourIngredients)) //--> You found brown sugar in the cabinet
console.log(bakingIngredients('cream cheese', yourIngredients)) //--> oof, you ran out :( 