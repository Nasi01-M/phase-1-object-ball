function gameObject() {
    // Define objects for home and away teams
    const homeTeam = {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {},
    };
  
    const awayTeam = {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {},
    };
  
    // Populate player data for home team
    homeTeam.players["Alan Anderson"] = {
      number: 0,
      shoe: 16,
      points: 22,
      rebounds: 12,
      assists: 12,
      steals: 3,
      blocks: 1,
      slamDunks: 17,
    };
    homeTeam.players["Reggie Evans"] = {
      number: 1,
      shoe: 14,
      points: 12,
      rebounds: 12,
      assists: 12,
      steals: 1,
      blocks: 2,
      slamDunks: 15,
    };
    homeTeam.players["Brook Lopez"] = {
      number: 11,
      shoe: 17,
      points: 17,
      rebounds: 19,
      assists: 10,
      steals: 3,
      blocks: 1,
      slamDunks: 5,
    };
    homeTeam.players["Mason Plumlee"] = {
      number: 13,
      shoe: 19,
      points: 12,
      rebounds: 12,
      assists: 6,
      steals: 2,
      blocks: 4,
      slamDunks: 8,
    };
    homeTeam.players["Jason Terry"] = {
      number: 31,
      shoe: 15,
      points: 19,
      rebounds: 2,
      assists: 6,
      steals: 3,
      blocks: 0,
      slamDunks: 0,
    };
  
    // Populate player data for away team
    awayTeam.players["Jeff Adrien"] = {
      number: 40,
      shoe: 18,
      points: 10,
      rebounds: 14,
      assists: 17,
      steals: 2,
      blocks: 7,
      slamDunks: 2,
    };
    awayTeam.players["Bismak Biyombo"] = {
      number: 28,
      shoe: 16,
      points: 12,
      rebounds: 12,
      assists: 21,
      steals: 4,
      blocks: 5,
      slamDunks: 5,
    };
    awayTeam.players["DeSagna Diop"] = {
      number: 33,
      shoe: 14,
      points: 24,
      rebounds: 31,
      assists: 2,
      steals: 2,
      blocks: 0,
      slamDunks: 0,
    };
    awayTeam.players["Ben Gordon"] = {
      number: 5,
      shoe: 15,
      points: 33,
      rebounds: 6,
      assists: 2,
      steals: 7,
      blocks: 1,
      slamDunks: 2,
    };
    awayTeam.players["Brendan Haywood"] = {
      number: 15,
      shoe: 15,
      points: 6,
      rebounds: 15,
      assists: 12,
      steals: 2,
      blocks: 5,
      slamDunks: 12,
    };
  
    // Return the entire object containing both teams
    return { home: homeTeam, away: awayTeam };
  }
  
  // Function to get the number of points scored by a player
function numPointsScored(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players.hasOwnProperty(playerName)) {
      return game[team].players[playerName].points;
    }
  }
  return null; // Return null if player not found
}

// Function to get the shoe size of a player
function shoeSize(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players.hasOwnProperty(playerName)) {
      return game[team].players[playerName].shoe;
    }
  }
  return null; // Return null if player not found
}

// Function to get the colors of a team
function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null; // Return null if team not found
}

// Function to get an array of team names
function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// Function to get an array of jersey numbers for a team
function playerNumbers(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map(player => player.number);
    }
  }
  return null; // Return null if team not found
}

// Function to get the stats of a player
function playerStats(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players.hasOwnProperty(playerName)) {
      return game[team].players[playerName];
    }
  }
  return null; // Return null if player not found
}

// Function to get the number of rebounds for the player with the largest shoe size
function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].shoe > largestShoeSize) {
        largestShoeSize = game[team].players[player].shoe;
        playerWithLargestShoe = player;
      }
    }
  }

  if (playerWithLargestShoe !== null) {
    return game.home.players[playerWithLargestShoe].rebounds;
  }

  return null; // Return null if no player found
}

// Function to find the player with the most points
function mostPointsScored() {
  let game = gameObject();
  let mostPoints = 0;
  let playerWithMostPoints = null;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].points > mostPoints) {
        mostPoints = game[team].players[player].points;
        playerWithMostPoints = player;
      }
    }
  }

  return playerWithMostPoints;
}

// Function to find the team with the most points
function winningTeam() {
  let game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }

  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Function to find the player with the longest name
function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";
  let playerWithLongestName = null;

  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
        playerWithLongestName = player;
      }
    }
  }

  return playerWithLongestName;
}

// Super Bonus: Function to check if the player with the longest name had the most steals
function doesLongNameStealATon() {
  let game = gameObject();
  let playerWithLongestName = playerWithLongestName();
  let mostSteals = 0;

  for (let team in game) {
    if (game[team].players.hasOwnProperty(playerWithLongestName)) {
      mostSteals = game[team].players[playerWithLongestName].steals;
    }
  }

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].steals > mostSteals) {
        return false;
      }
    }
  }

  return true;
}
