function Cell(x, y) {
    this.x = x;
    this.y = y;
}

function Board(canvasId) {
    this.board = document.getElementById(canvasId);
    this.base = 3;
    this.nCells = 9;
    this.cellPixel = 50;
    this.widthPixel = this.nCells*this.cellPixel+1;
    this.heightPixel = this.nCells*this.cellPixel+1;
    this.reset();
}

Board.prototype.reset = function() {
    // reset the whole board
    this.board.width = this.widthPixel;
    this.board.height = this.heightPixel;
    this.boardCtx = this.board.getContext("2d");

    // draw the grid lines
    this.boardCtx.beginPath();
    for (var i=0; i<=this.nCells; i++) {
	    this.boardCtx.moveTo(0,i*this.cellPixel+0.5);
	    this.boardCtx.lineTo(this.widthPixel,i*this.cellPixel+0.5);
	    this.boardCtx.moveTo(i*this.cellPixel+0.5,0);
	    this.boardCtx.lineTo(i*this.cellPixel+0.5,this.heightPixel);
    }
    this.boardCtx.stroke();
}

Board.prototype.setDigitLargeCell = function(cell, digit) {
    var cellCanvasX = cell.x * this.cellPixel + this.cellPixel/2;
    var cellCanvasY = cell.y * this.cellPixel + this.cellPixel/2+5;
    this.boardCtx.font = "40px serif";
    this.boardCtx.textAlign = "center";
    this.boardCtx.textBaseline = "middle";
    this.boardCtx.fillText(digit, cellCanvasX, cellCanvasY);
}

Board.prototype.setDigitSmallCell = function(cell, digit) {
    var cellRow = Math.floor((digit-1)/this.base);
    var cellCol = (digit-1) % this.base;
    var cellSubWidth = this.cellPixel / this.base;
    var cellCanvasX = cell.x * this.cellPixel + cellCol * cellSubWidth + cellSubWidth/2;
    var cellCanvasY = cell.y * this.cellPixel + cellRow * cellSubWidth + cellSubWidth/2;
    this.boardCtx.font = "14px serif";
    this.boardCtx.textAlign = "center";
    this.boardCtx.textBaseline = "middle";
    this.boardCtx.fillText(digit, cellCanvasX, cellCanvasY);
}


var b = new Board("board");
var n, c, c2;
for (n=1; n<=9; n++) {
    c = new Cell(2,3);
    b.setDigitSmallCell(c, n);
    c2 = new Cell(n-1, n-1);
    b.setDigitLargeCell(c2, n);
}

