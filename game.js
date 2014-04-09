// Initialize Phaser
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Define score
var score = 0;

// Define the other states
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);

game.state.start('load');