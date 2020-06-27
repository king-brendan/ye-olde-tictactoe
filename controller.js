class Controller {
  constructor(m, v) {
    this.model = m;
    this.view = v;
  }

  //plays the game
  playGame() {
    var d = this;

    var t;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        t = document.getElementById(i.toString() + j.toString());
        t.style.top = (i + .3) * 150;
        t.style.left = (j + .3) * 150;
      }
    }

    //for some reason can't automate this with another nested for loop -
    //running into problems with defining a separate local function for each
    //addEventListener. Variable scope and all that

    var t1 = document.getElementById("00");
    t1.addEventListener("click", function() {d.registerClick(0, 0, t1);});

    var t2 = document.getElementById("01");
    t2.addEventListener("click", function() {d.registerClick(0, 1, t2);});

    var t3 = document.getElementById("02");
    t3.addEventListener("click", function() {d.registerClick(0, 2, t3);});

    var t4 = document.getElementById("10");
    t4.addEventListener("click", function() {d.registerClick(1, 0, t4);});

    var t5 = document.getElementById("11");
    t5.addEventListener("click", function() {d.registerClick(1, 1, t5);});

    var t6 = document.getElementById("12");
    t6.addEventListener("click", function() {d.registerClick(1, 2, t6);});

    var t7 = document.getElementById("20");
    t7.addEventListener("click", function() {d.registerClick(2, 0, t7);});

    var t8 = document.getElementById("21");
    t8.addEventListener("click", function() {d.registerClick(2, 1, t8);});

    var t9 = document.getElementById("22");
    t9.addEventListener("click", function() {d.registerClick(2, 2, t9);});

  }

  //update the model with the given click
  registerClick(r, c, t) {
    console.log(r.toString() + " " + c.toString());
    if ((!m.gameWon()) && (m.move(r, c) == 1)) {
      this.view.refresh();
      console.log("successful move");
    }
  }
}
