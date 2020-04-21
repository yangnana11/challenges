const trashDuty = (exerciseMins, exerciseChecker) => {
  let result=[];
  for (let key in exerciseMins) {
    let value = exerciseMins[key];
    let count = 0;
    let i = 0;
    while(count<4 && i<7) {
      if (exerciseChecker(value[i], 30)) count++;
      i++;
    }
    if (count>=4) result.push(key); 
  }
  return result;
};

const exerciseChecker = function(minute, limit) {  
    if (minute>=limit) return true;
    else return false;
}


/* Example objects*/

const exerciseMins = {
    'David': [25, 35, 15, 60, 10, 0, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [15, 25, 40, 60, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 30, 45, 90, 90, 15, 0]
};

const exerciseMins2 = {
    'David': [50, 35, 15, 60, 10, 35, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [15, 25, 40, 0, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 30, 45, 90, 90, 15, 0]
};

const exerciseMins3 = {
    'David': [50, 35, 15, 60, 10, 35, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [40, 25, 40, 80, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 10, 45, 0, 90, 15, 0]
};


// UNCOMMENT THIS TO TEST YOUR CODE
console.log(trashDuty(exerciseMins, exerciseChecker)); // should log ['Ryan', 'Harry', 'Mike', 'Chris'];
console.log(trashDuty(exerciseMins2, exerciseChecker)) // should log ['David', 'Ryan', 'Mike', 'Chris'];
console.log(trashDuty(exerciseMins3, exerciseChecker)) // should log ['David', 'Ryan', 'Harry', 'Mike'];