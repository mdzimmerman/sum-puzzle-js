var board=document.getElementById("board");
var boardCtx=board.getContext("2d");
var cellSize=50;

boardCtx.beginPath();
for (i=0; i<=9; i++) {
	boardCtx.moveTo(1,i*cellSize+1);
	boardCtx.lineTo(451,i*cellSize+1);
	boardCtx.moveTo(i*cellSize+1,1);
	boardCtx.lineTo(i*cellSize+1,452);
}
boardCtx.stroke();
