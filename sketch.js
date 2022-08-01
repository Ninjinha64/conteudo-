//variáveis necessárias
var mario, marioImgD , marioImgE;
var cloud , cloudImage
var ground,groundImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var MariojumpD , MariojumpE;
var Princesa;
var jumpSong , dieSong , bk_Song;
var InvisibleGround;
var obstaculo, obstaculoImg




//carregamento de Animações e images
function preload() {
    marioImgD = loadAnimation("./assets/mario1.png","./assets/mario2.png","/assets/mario3.png","/assets/mario4.png");
    marioImgE = loadAnimation("./assets/mario1E.png","./assets/mario2E.png","/assets/mario3E.png","/assets/mario4E.png");
    MariojumpE = loadImage ("./assets/MarioPulandoE.png");
    MariojumpD = loadImage ("./assets/MarioPulandoD.png"); 
    jumpSong = loadSound ("./sounds/jump.mp3");
    dieSong = loadSound ("./sounds/die.mp3");
    bk_Song  = loadSound ("./sounds/bk_Song.mp3");
    cloudImage = loadImage ("./assets/Nuvens.png");
    obstaculo = loadImage ("./assets/Tubo.png");
    //nuvens2 = loadImage ("Nuvens2.jpg")
    //Princesa = loadImage   ("./assets/Princess.png");
}
  
    function setup() {
    //canvas
    createCanvas(windowWidth, windowHeight);

    //sprite do mário
    mario = createSprite(50, height -92, 20, 50);
    mario.addAnimation("mario1D",marioImgD);
    mario.addAnimation("mario1E",marioImgE);

    //sprite das nuvens
    cloud = createSprite(width + -400, height - 500, 10, 10);
    cloud.addImage("cloud", cloudImage);
    cloud.scale = 0.3;
    //Sprite do chão
    ground = createSprite (width/2 ,height - 10,width,20);
    ground.shapeColor = "limegreen";

    //descer
    InvisibleGround = createSprite(width / 2, height - 10, width, 10);
    InvisibleGround.visible = false;

    //obstaculos baseando no projeto trex
    //obstaculo  = createSprite(width + 10, height - 35, 10, 40);
    //obstaculo.addImage ("obstaculo", obstaculoImg)
    //obstaculo.velocityX = -(5 + Score / 100);

   //musiquinhas não funciona ):

    // bk_Song.play();
    // bk_Song.setVolume(0.5);


}

function draw() {
    //cor de fundo
    background("lightblue");
    fill ("gold");
    stroke (5);
    textSize(24);
    text ("Score: "+score, width-145,50);
    if (gameState === PLAY) {
        ground.velocityX = -7;
    
        score = score + Math.round(getFrameRate() / 60);
    
        if (ground.x < 0) {
          ground.x = ground.width / 2;
        }
    
        //if do pulo
        //verificar se teclou ou apertou espaço
        if (touches.length > 0 || keyDown("space")) {
          if (mario.y >= height - 40) {
            mario.velocityY = -10;
            jumpSong.play();
            touches = [];
          }
        }
    
        mario.velocityY = mario.velocityY + 0.5;
    
        //function criarNuvem(){}
        
        
       

        //function criarobstaculos();
    
        /*if (obstaculoG.isTouching(trex)) {
          gameState = END;
          dieSound.play();
        }*/
        //mario colidindo com o chão invisível

         mario.collide(InvisibleGround);

      }
    

    //desenhando sprites
    drawSprites();
}