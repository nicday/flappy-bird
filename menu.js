var menu_state = {
  create: function() {
    // Call the start function when pressing
    // the space bar
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.start, this);


    var style = {font: "30px Arial", fill: '#ffffff'};
    var x = game.world.width / 2,
        y = game.world.height /2;

    var text = this.game.add.text(x, y-50, "Press space to start", style);
    text.anchor.setTo(0.5, 0.5);

    // If there is already a score
    if (score > 0) {
      // Display the score
      var score_label = this.game.add.text(x, y+50, "score: " + score, style);
      score_label.anchor.setTo(0.5, 0.5);
    };

  },

  start: function() {
    this.game.state.start('play');
  },
};