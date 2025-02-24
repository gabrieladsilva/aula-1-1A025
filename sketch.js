unction setup() {
    createCanvas(400, 400);
  }
  //Fução draw dignifica desenhar
  function draw() {
    background(255,0,255); 
    
   //desenhando a linha superior 
  circle(50,50,100); //Primeiro circulo
  cirfcle(150,50,100); //Segundo circulo
  circle(250,50,100); //Terceiro circulo
  circle(350,50,100); //Quarto circulo
  
   //desenhando a linha inferior
  circle(50,350,100); //Primeiro circulo
  circle(150,350,100); //Segundo circulo
  circle(250,350,100); //Terceiro circulo
  circle(350,350,100); //Quarto circulo
  }