const getSleepHours = (day) => {
    switch (day) {
      case 'monday':
      return 5;
      break;
      case 'tuesday':
      return 6;
      break;
      case 'wednesday':
      return 6;
      break;
      case 'thursday':
      return 5.5;
      break;
      case 'friday':
      return 7;
      break;
      case 'saturday':
      return 9;
      break;
      case 'sunday':
      return 10;
      break;
    }
  };
  
  const getActualSleepHours = () => {
  total = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  return total;
  };
  console.log(getActualSleepHours());
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  console.log(getIdealSleepHours());
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("Good goin'! You hit your target amount of sleep.");
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log("You got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep than you needed!");
    }
    else {
      console.log("Dude, you really need to get some rest. You are under your ideal sleep goal by " + (idealSleepHours - actualSleepHours) + " hour(s)!");
    }
  };
  
  calculateSleepDebt();