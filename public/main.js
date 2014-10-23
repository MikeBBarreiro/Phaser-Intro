var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){
  //game comes from line one
  game.load.image('bobo','/img/acryl_bobablast.png');
  game.load.image('nocooper','/img/1984-nocooper-space.png');
  game.load.image('yes','/img/shocktroopers_angel.png');
  game.load.atlasJSONHash('bot', '/img/running_bot.png', '/img/running_bot.json');
}

var yes;

function create(){
  //animation start
  var bot = game.add.sprite(600, 200, 'bot');
  //making an animation and calling it run
  bot.animations.add('run');
  bot.animations.play('run', 15, true);
  //animation end


  var bobo     = game.add.sprite(30,45, 'bobo');
  var nocooper = game.add.sprite(300,200, 'nocooper');
  yes = game.add.sprite(100,200, 'yes');
  yes.anchor.set(0.5);

  yes.scale.setTo(2);
  game.physics.enable(yes, Phaser.Physics.ARCADE);
  game.physics.enable(bobo, Phaser.Physics.ARCADE);
  game.physics.enable(nocooper, Phaser.Physics.ARCADE);

  // yes.body.velocity.x = 150;

//gives imgs an animation
  // bobo.body.velocity.y = 150;
  // bobo.body.velocity.x = 155;

  nocooper.body.velocity.x = 250;
  nocooper.body.velocity.y = 100;

   var tween = game.add.tween(bobo);
   tween.to({ x: 600 }, 1000);
   tween.start();
   var tween = game.add.tween(bot);
   tween.to({x: -600}, 9000);
   tween.start();

}

//has images follow the mouse
function update(){
    if (game.physics.arcade.distanceToPointer(yes, game.input.activePointer) > 8){
        game.physics.arcade.moveToPointer(yes, 300);
    }else{
        yes.body.velocity.set(0);
    }

}
