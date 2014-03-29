function Cell(x, y) {
    this.x = x;
    this.y = y;
}

function Board(canvasId) {
    this.board = document.getElementById(canvasId);
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

Board.prototype.setTextLargeCell = function(cell, text) {
    var cellCanvasX = cell.x * this.cellPixel + this.cellPixel/2;
    var cellCanvasY = cell.y * this.cellPixel + this.cellPixel/2;
    this.boardCtx.font = "36px serif";
    this.boardCtx.textAlign = "center";
    this.boardCtx.textBaseline = "middle";
    this.boardCtx.fillText(text, cellCanvasX, cellCanvasY);
}



var b = new Board("board");
var n=1;
var c;
for (i=0; i<b.nCells; i++) {
    for (j=0; j<b.nCells; j++) {
        c = new Cell(i, j);
        b.setTextLargeCell(c,n);
        n++;
        if (n>b.nCells) n=1;
    }
}

