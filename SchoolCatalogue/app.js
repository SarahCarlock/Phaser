class School {
    constructor(name) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(value) {
      if (value.isNaN()) {
      console.log('Invalid input: numberOfStudents must be set to a Number.'); 
      }
      else {
      this._numberOfStudents = value;}
      }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberofStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const randInt = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeacher[randInt];
    };
  };
  class Primary extends School {
    constructor(name, level, numberOfStudents) {
      super(name, 'primary', numberOfStudents);
      this._pickUpPolicy = '';
    }
    get pickUpPolicy() {
      return this._pickUpPolicy;
    }
  };
  class Middle extends School {
  
  };
  class High extends School {
    constructor(name, level, numberOfStudents) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = '';
    }
    /*get sportsTeams() {
      return this.sportsTeams;
    };*/
  };
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  /*lorraineHansbury.quickFacts();*/
  /*school.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);*/
  const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams());