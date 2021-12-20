const team = {
    _players: [{
                  firstName: 'Christiano',
                  lastName: 'Ronaldo',
                  age: 36
                }, {
                  firstName: 'Lionel',
                  lastName: 'Messi',
                  age: 33
                }, 
                {
                  firstName: 'Wayne',
                  lastName: 'Ronney',
                  age: 35
                }],
    _games:[{
                opponent: 'Real Madrid',
                teamPoints: 12,
                opponentPoints: 97
              },
              {
                opponent: 'Barcelona',
                teamPoints: 72,
                opponentPoints: 54
              },
              {
                opponent: 'Manchester       United',
                teamPoints: 42,
                opponentPoints: 27
              }],
    get games() {
                 return this._games;
                },
     get players() {
                 return this._players;
                },
     addPlayer(firstName, lastName, age) {
                let player = {
                  firstName: firstName,
                  lastName: lastName,
                  age: age
                };
            
                this.players.push(player);
              },
              addGame(oppName, teamPts, oppPts) {
                    const game = {
                      opponent: oppName,
                      teamPoints: teamPts,
                      opponentPoints: oppPts
                    };
                    this.games.push(game);
                  }

};

team.addPlayer('Steph', 'Curry',28);
team.addPlayer('Lisa', 'Leslie',44);
team.addPlayer('Bugs', 'Bunny',76);

team.addGame('Hearts of Oak', 10, 98);

console.log(team.games);
