function quarantineSchedule(day) {
  let data = {
    'monday': 'Read',
    'wednesday': 'Puzzles',
    'friday': 'Netflix',
    'sunday': 'Exercise'
  };
  day = day.toLowerCase();
  if (data.hasOwnProperty(day)) {
    return data[day];
  } else return 'Code'
  
};

// UNCOMMENT THESE TO TEST YOUR CODE
console.log(quarantineSchedule('mOnDaY')) // should log 'Read'
console.log(quarantineSchedule('wednesday')) // should log 'Puzzles'
console.log(quarantineSchedule('FRIDAY')) // should log 'Netflix'
console.log(quarantineSchedule('SuNDay')) // should log 'Exercise'
console.log(quarantineSchedule('tuesDAY')) // should log 'Code'