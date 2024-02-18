const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200);//x,y,width,height사각형 그려서 채움
ctx.rect(150, 250, 100, 100);//x,y,width,height사각형 그림
ctx.fill();//채워줘야지 화면에 나타남

ctx.beginPath();//끊어줌
ctx.rect(250, 350, 100, 100);
ctx.fillStyle='red';//색 바끔
/*setTimeout(() =>(
    ctx.fill()
  ),1000);*/
ctx.fill();

ctx.beginPath();//끊어줌
ctx.fillStyle='pink';
ctx.moveTo(500,500);//이동하고
ctx.lineTo(600,500);//선그림
ctx.lineTo(600,600);
ctx.lineTo(500,600);
ctx.lineTo(500,500);
//ctx.stroke();//선 만듬-화면에 나타남
ctx.fill();//색 채움


//집모양
ctx.beginPath();
ctx.fillRect(400,200,50,200);
ctx.fillRect(700,200,50,200);
ctx.fillRect(550,300,50,100);
ctx.moveTo(400,200);
ctx.lineTo(750,200);
ctx.lineTo(575,100);
ctx.lineTo(400,200);
//ctx.stroke();
ctx.fill();

//사람
ctx.beginPath();
ctx.fillStyle= "#FBCEB1";
ctx.fillRect(100,500,20,100);//왼팔
ctx.fillRect(200,500,20,100);//오른
ctx.fillRect(130,500,60,150);//몸통

ctx.arc(160,440,50,0,2*Math.PI);//얼굴 원
ctx.fill();//원채워

ctx.beginPath();
ctx.fillStyle= 'black';
ctx.arc(140,430,7,Math.PI,2*Math.PI);//왼쪽 눈
ctx.arc(180,430,7,Math.PI,2*Math.PI);//오른쪽 눈;
ctx.fill();

ctx.beginPath();
ctx.fillStyle="red";
ctx.arc(160,470,10,0,1*Math.PI);//;
ctx.fill();

ctx.beginPath();
ctx.beginPath();
ctx.arc(75+200, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110+200, 75);
ctx.arc(75+200, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(65+200, 65);
ctx.arc(60+200, 65, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(95+200, 65);
ctx.arc(90+200, 65, 5, 0, Math.PI * 2, true); // Right eye
ctx.stroke();

// Cubic curves example
ctx.beginPath();
ctx.fillStyle="hotpink"
var x = 310;
var y = 0;
ctx.moveTo(75+x, 40+y);
ctx.bezierCurveTo(75+x, 37+y, 70+x, 25+y, 50+x, 25+y);
ctx.bezierCurveTo(20+x, 25+y, 20+x, 62.5+y, 20+x, 62.5+y);
ctx.bezierCurveTo(20+x, 80+y, 40+x, 102+y, 75+x, 120+y);
ctx.bezierCurveTo(110+x, 102+y, 130+x, 80+y, 130+x, 62.5+y);
ctx.bezierCurveTo(130+x, 62.5+y, 130+x, 25+y, 100+x, 25+y);
ctx.bezierCurveTo(85+x, 25+y, 75+x, 37+y, 75+x, 40+y);
ctx.fill();