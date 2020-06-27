class View {
  //this should be a read-only model but for the sake of this game I won't do that.
  constructor(m) {
    this.model = m;
    this.tileElements = this.makeTileArray();
  }

  //makes a 2d array of strings that are the ids of each tile element.
  makeTileArray() {
    var a = new Array(3);
    for (var i = 0; i < 3; i++) {
      a[i] = new Array(3);
      for (var j = 0; j < 3; j++) {
        a[i][j] = i.toString() + j.toString();
      }
    }
    return a;
  }

  //updates the whole view.
  refresh() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        var t = document.getElementById(i.toString() + j.toString());
        if (this.model.getTile(i, j) == "X") {
          t.style.backgroundImage = "url(https://i.ebayimg.com/images/g/KsMAAOSwZrBeYV8u/s-l400.jpg)";
          t.style.backgroundSize = "100px 100px";
        } else if (this.model.getTile(i, j) == "O") {
          t.style.backgroundImage = "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb690bdc-01dc-4fdd-98d6-737864edda81/d33kxs6-8737deb6-b933-491b-a21c-f61e94a996c2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZmI2OTBiZGMtMDFkYy00ZmRkLTk4ZDYtNzM3ODY0ZWRkYTgxXC9kMzNreHM2LTg3MzdkZWI2LWI5MzMtNDkxYi1hMjFjLWY2MWU5NGE5OTZjMi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.loGOVfmmfgliQoLE3jlJBYD0DpJm7He_AnCU2UN1vc0)";
          t.style.backgroundSize = "100px 100px";
        }
      }
    }
    if (this.model.gameWon()) {
      console.log("game over!");
      document.getElementById("endTextContainer").style.display = "block";
      document.getElementById("gg").innerText = "Well played!";
      document.getElementById("winner").innerText = "Today's champion: " + this.model.winner;
      document.getElementById("loser").innerText = "Today's scoundrel: " + this.model.loser;
    }
  }
}
