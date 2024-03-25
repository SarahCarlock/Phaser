const team = { 

    _players: [
      {firstName: "Marty", lastName: "Mcfly", age: 30},
      {firstName: "Don", lastName: "Quixote", age: 35},
      {firstName: "Pauly", lastName: "Shore", age: 40},
     ],
    _games: [ 
      {opponent: "North", teamPoints: 100, opponentPoints: 150},
      {opponent: "South", teamPoints: 125, opponentPoints: 122},
      {opponent: "East", teamPoints: 105, opponentPoints: 110},
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName, lastName: newLastName, age: newAge
      };
      this.players.push(player)
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
        this.games.push(game)
    }
   };
  
   team.addPlayer("Bugs", "Bunny", 76);
   team.addGame("Titans", 100, 98);
   console.log(team.players);
   console.log(team.games);