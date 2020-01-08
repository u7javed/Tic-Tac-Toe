var grid = [
	[0,0,0],
	[0,0,0],
	[0,0,0],
];
var boxSize = 350/3;
var playerTurn = 'O';
var playerFirst = 'O';

var oPlayer = [];
var xPlayer = [];
var oWin = false;
var xWin = false;
var tie = false;
var difficulty = 1;

//scores
var oScore = 0;
var xScore = 0;
var xoScore = 0;

//game font
var googleFontCourierPrime;

//game screens
var titleScreenRunning = true;
var playerGameRunning = false;
var playerVsAIgameRunning = false;

//winner
var lineXi = 0, lineXf = 0, lineYi = 0, lineYf = 0;

//grid animation
var xRun = 40; yRun = 50;
var piRun = 1;
/*
Preload certain assets
*/
function preload() {
	googleFontCourierPrime = loadFont("CourierPrime-Bold.ttf");
}

function resetVariables() {
	grid = [
		[0,0,0],
		[0,0,0],
		[0,0,0],
	];
	if(playerFirst == 'O') {
		playerTurn = 'O';
		playerFirst = 'X';
	} else {
		playerTurn = 'X';
		playerFirst = 'O';
	}

	if(titleScreenRunning) {
		xScore = 0;
		oScore = 0;
		xoScore = 0;
	}
	oPlayer = [];
	xPlayer = [];
	oWin = false;
	xWin = false;
	tie = false;
	xRun = 40;
	yRun = 50;
	piRun = 1;
}

function mousePressed() {
	if(titleScreenRunning) {
		//if player vs player is pressed
		if(mouseX >= 70 && mouseX <= 380 && mouseY >= 270 && mouseY <= 310) {
			titleScreenRunning = false;
			playerGameRunning = true;
		}
		//if player vs ai is pressed
		else if(mouseX >= 100 && mouseX <= 350 && mouseY >= 420 && mouseY <= 460) {
			titleScreenRunning = false;
			playerVsAIgameRunning = true;
		}
		//change difficulty
		else if(mouseX >= 70 && mouseX <= 380 && mouseY >= 500 && mouseY <= 522) {
			if(difficulty == 1) {
				difficulty = 0;
			} else {
				difficulty = 1;
			}
		}
	} else if(playerGameRunning && !oWin && !xWin && !tie) {
		//grid 1
		if(mouseX >= 40 && mouseX <= (40 + boxSize) && mouseY >= 50 && mouseY <= (50 + boxSize)) {
			if(!grid[0][0]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse(40 + (boxSize/2), 50 + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[0][0] = 1;
				} else {
					xPlayer.push(new Xmark(40, 50, (40 + boxSize), (50 + boxSize)));
					playerTurn = 'O';
					grid[0][0] = 2;
				}
			}
		}
		//grid 2
		if(mouseX >= (50 + boxSize) && mouseX <= (50 + 2*boxSize) && mouseY >= 50 && mouseY <= (50 + boxSize)) {
			if(!grid[0][1]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse((50 + boxSize) + (boxSize/2), 50 + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[0][1] = 1;
				} else {
					xPlayer.push(new Xmark((50 + boxSize), 50, (50 + 2*boxSize), (50 + boxSize)));
					playerTurn = 'O';
					grid[0][1] = 2;
				}
			}
		}
		//grid 3
		if(mouseX >= (60 + 2*boxSize) && mouseX <= (60 + 3*boxSize) && mouseY >= 50 && mouseY <= (50 + boxSize)) {
			if(!grid[0][2]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse((60 + 2*boxSize) + (boxSize/2), 50 + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[0][2] = 1;
				} else {
					xPlayer.push(new Xmark((60 + 2*boxSize), 50, (60 + 3*boxSize), (50 + boxSize)));
					playerTurn = 'O';
					grid[0][2] = 2;
				}
			}
		}
		//grid 4
		if(mouseX >= 40 && mouseX <= (40 + boxSize) && mouseY >= (60 + boxSize) && mouseY <= (60 + 2*boxSize)) {
			if(!grid[1][0]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse(40 + (boxSize/2), (60 + boxSize) + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[1][0] = 1;
				} else {
					xPlayer.push(new Xmark(40, (60 + boxSize), (40 + boxSize), (60 + 2*boxSize)));
					playerTurn = 'O';
					grid[1][0] = 2;
				}
			}
		}
		//grid 5
		if(mouseX >= (50 + boxSize) && mouseX <= (50 + 2*boxSize) && mouseY >= (60 + boxSize) && mouseY <= (60 + 2*boxSize)) {
			if(!grid[1][1]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse((50 + boxSize) + (boxSize/2), (60 + boxSize) + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[1][1] = 1;
				} else {
					xPlayer.push(new Xmark((50 + boxSize), (60 + boxSize), (50 + 2*boxSize), (60 + 2*boxSize)));
					playerTurn = 'O';
					grid[1][1] = 2;
				}
			}
		}
		//grid 6
		if(mouseX >= (60 + 2*boxSize) && mouseX <= (60 + 3*boxSize) && mouseY >= (60 + boxSize) && mouseY <= (60 + 2*boxSize)) {
			if(!grid[1][2]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse((60 + 2*boxSize) + (boxSize/2), (60 + boxSize) + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[1][2] = 1;
				} else {
					xPlayer.push(new Xmark((60 + 2*boxSize), (60 + boxSize), (60 + 3*boxSize), (60 + 2*boxSize)));
					playerTurn = 'O';
					grid[1][2] = 2;
				}
			}
		}
		//grid 7
		if(mouseX >= 40 && mouseX <= (40 + boxSize) && mouseY >= (70 + 2*boxSize) && mouseY <= (70 + 3*boxSize)) {
			if(!grid[2][0]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse(40 + (boxSize/2), (70 + 2*boxSize) + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[2][0] = 1;
				} else {
					xPlayer.push(new Xmark(40, (70 + 2*boxSize), (40 + boxSize), (70 + 3*boxSize)));
					playerTurn = 'O';
					grid[2][0] = 2;
				}
			}
		}
		//grid 8
		if(mouseX >= (50 + boxSize) && mouseX <= (50 + 2*boxSize) && mouseY >= (70 + 2*boxSize) && mouseY <= (70 + 3*boxSize)) {
			if(!grid[2][1]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse((50 + boxSize) + (boxSize/2), (70 + 2*boxSize) + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[2][1] = 1;
				} else {
					xPlayer.push(new Xmark((50 + boxSize), (70 + 2*boxSize), (50 + 2*boxSize), (70 + 3*boxSize)));
					playerTurn = 'O';
					grid[2][1] = 2;
				}
			}
		}
		//grid 9
		if(mouseX >= (60 + 2*boxSize) && mouseX <= (60 + 3*boxSize) && mouseY >= (70 + 2*boxSize) && mouseY <= (70 + 3*boxSize)) {
			if(!grid[2][2]) {
				if(playerTurn == 'O') {
					oPlayer.push(new Ellipse((60 + 2*boxSize) + (boxSize/2), (70 + 2*boxSize) + (boxSize/2), boxSize/2, boxSize/2));
					playerTurn = 'X';
					grid[2][2] = 1;
				} else {
					xPlayer.push(new Xmark((60 + 2*boxSize), (70 + 2*boxSize), (60 + 3*boxSize), (70 + 3*boxSize)));
					playerTurn = 'O';
					grid[2][2] = 2;
				}
			}
		}

	} else if((playerGameRunning || playerVsAIgameRunning) && (xWin || oWin || tie)) {
		if(mouseX >= 70 && mouseX <= 380 && mouseY >= 612 && mouseY <= 657) {
			resetVariables();
		} else if(mouseX >= 150 && mouseX <= 300 && mouseY >= 715 && mouseY <= 755) {
			playerGameRunning = false;
			playerVsAIgameRunning = false;
			titleScreenRunning = true;
			resetVariables();
		}
	} else if(playerVsAIgameRunning && !xWin && !oWin && !tie) {
		if(mouseX >= 40 && mouseX <= (40 + boxSize) && mouseY >= 50 && mouseY <= (50 + boxSize)) {
			if(!grid[0][0]) {
				xPlayer.push(new Xmark(40, 50, (40 + boxSize), (50 + boxSize)));
				playerTurn = 'O';
				grid[0][0] = 2;
			}
		}
		//grid 2
		if(mouseX >= (50 + boxSize) && mouseX <= (50 + 2*boxSize) && mouseY >= 50 && mouseY <= (50 + boxSize)) {
			if(!grid[0][1]) {
				xPlayer.push(new Xmark((50 + boxSize), 50, (50 + 2*boxSize), (50 + boxSize)));
				playerTurn = 'O';
				grid[0][1] = 2;
			}
		}
		//grid 3
		if(mouseX >= (60 + 2*boxSize) && mouseX <= (60 + 3*boxSize) && mouseY >= 50 && mouseY <= (50 + boxSize)) {
			if(!grid[0][2]) {
				xPlayer.push(new Xmark((60 + 2*boxSize), 50, (60 + 3*boxSize), (50 + boxSize)));
				playerTurn = 'O';
				grid[0][2] = 2;
			}
		}
		//grid 4
		if(mouseX >= 40 && mouseX <= (40 + boxSize) && mouseY >= (60 + boxSize) && mouseY <= (60 + 2*boxSize)) {
			if(!grid[1][0]) {
				xPlayer.push(new Xmark(40, (60 + boxSize), (40 + boxSize), (60 + 2*boxSize)));
				playerTurn = 'O';
				grid[1][0] = 2;
			}
		}
		//grid 5
		if(mouseX >= (50 + boxSize) && mouseX <= (50 + 2*boxSize) && mouseY >= (60 + boxSize) && mouseY <= (60 + 2*boxSize)) {
			if(!grid[1][1]) {
				xPlayer.push(new Xmark((50 + boxSize), (60 + boxSize), (50 + 2*boxSize), (60 + 2*boxSize)));
				playerTurn = 'O';
				grid[1][1] = 2;
			}
		}
		//grid 6
		if(mouseX >= (60 + 2*boxSize) && mouseX <= (60 + 3*boxSize) && mouseY >= (60 + boxSize) && mouseY <= (60 + 2*boxSize)) {
			if(!grid[1][2]) {
				xPlayer.push(new Xmark((60 + 2*boxSize), (60 + boxSize), (60 + 3*boxSize), (60 + 2*boxSize)));
				playerTurn = 'O';
				grid[1][2] = 2;
			}
		}
		//grid 7
		if(mouseX >= 40 && mouseX <= (40 + boxSize) && mouseY >= (70 + 2*boxSize) && mouseY <= (70 + 3*boxSize)) {
			if(!grid[2][0]) {
				xPlayer.push(new Xmark(40, (70 + 2*boxSize), (40 + boxSize), (70 + 3*boxSize)));
				playerTurn = 'O';
				grid[2][0] = 2;
			}
		}
		//grid 8
		if(mouseX >= (50 + boxSize) && mouseX <= (50 + 2*boxSize) && mouseY >= (70 + 2*boxSize) && mouseY <= (70 + 3*boxSize)) {
			if(!grid[2][1]) {
				xPlayer.push(new Xmark((50 + boxSize), (70 + 2*boxSize), (50 + 2*boxSize), (70 + 3*boxSize)));
				playerTurn = 'O';
				grid[2][1] = 2;
			}
		}
		//grid 9
		if(mouseX >= (60 + 2*boxSize) && mouseX <= (60 + 3*boxSize) && mouseY >= (70 + 2*boxSize) && mouseY <= (70 + 3*boxSize)) {
			if(!grid[2][2]) {
				xPlayer.push(new Xmark((60 + 2*boxSize), (70 + 2*boxSize), (60 + 3*boxSize), (70 + 3*boxSize)));
				playerTurn = 'O';
				grid[2][2] = 2;
			}
		}
	}
}

function Ellipse(x, y, radius) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.runAnimation = true;
	this.loop = 0.1;

	this.show = function() {
		push();
		noFill();
		strokeWeight(5);
		stroke(10, 240, 12);
		arc(this.x, this.y, this.radius, this.radius, 0, this.loop);
		if(this.runAnimation) {
			arc(this.x, this.y, this.radius, this.radius, 0, this.loop);
			if(this.loop <= 6) {
				this.loop += 0.3;
			} else {
				this.runAnimation = false;
				this.loop = TWO_PI;
			}
		}
		pop();
	}
}

function Xmark(xi, yi, xf, yf) {
	this.xi = xi + 30;
	this.yi = yi + 30;
	this.xf = xf - 30;
	this.yf = yf - 30;
	this.runAnimation = true;

	this.xi1 = xf - 30;
	this.yi1 = yf - 30;
	this.xf2 = xi + 30;
	this.yf2 = yi + boxSize - 30;

	this.show = function() {
		push();
		stroke(250, 10, 12);
		strokeWeight(5);
		line(this.xi1, this.yi1, this.xf, this.yf);
		line(this.xi, this.yi + boxSize - 60, this.xf2, this.yf2);
		if(this.runAnimation) {
			if(this.xi1 > xi + 30) {
				this.xi1 -= 4;
				this.yi1 -= 4;
				this.xf2 += 4;
				this.yf2 -= 4;
			} else {
				this.runAnimation = false;
				this.xi1 = xi + 30;
				this.yi1 = yi + 30;
				this.xf2 = xf - 30;
				this.yf2 = yf - boxSize + 30;
			}
		}
		pop();
	}
}

function setup() {
	createCanvas(450, 800);
}

function draw() {
	background(0);
	if(titleScreenRunning) {
		titleScreen();
	}
	if(playerGameRunning) {
		drawBoard();
		if(xWin || oWin || tie) {
			finishScreen(lineXi, lineYi, lineXf, lineYf);
		} else {
			play();
		}
	}
	if(playerVsAIgameRunning) {
		drawBoard();
		if(xWin || oWin || tie) {
			finishScreen(lineXi, lineYi, lineXf, lineYf);
		} else {
			play();
		}
	}
}

function titleScreen() {
	//title
	push();
	textFont(googleFontCourierPrime);
	textSize(50);
	textAlign(CENTER);
	fill(255);
	text("Tic-Tac-Toe", width/2, 100);

	//selections
	rect(70, 270, 310, 40, 10);
	rect(100, 420, 250, 40, 10);

	fill(0);
	textSize(30);
	text("PLAYER vs PLAYER", width/2, 300);
	text("PLAYER vs AI", width/2, 450);
	if(difficulty == 1) {
		fill(200, 10, 10);
		text("-> MINIMAX ALGORITHM", width/2, 520);
	} else {
		fill(10, 200, 10);
		text("-> EASY ALGORITHM", width/2, 520);
	}



	//developer
	fill(255);
	textSize(40);
	fill(0, 255, 255);
	text("UMER J.", width/2, 130);
	pop();
}

function drawBoard() {

	//draw grid
	push();
	noStroke();
	fill(255);

	textSize(40);
	text(oScore, 95, 510);
	text(xScore, 242, 510);
	text(xoScore, 402, 510);
	//horizontal beams
	rect(40 + boxSize, 50, 10, yRun, 10);
	rect(50 + boxSize*2, 50, 10, yRun, 10);

	//vertical beams
	rect(40, 50 + boxSize, xRun, 10, 10);
	rect(40, 60 + boxSize*2, xRun, 10, 10);

	noFill();
	strokeWeight(5);
	stroke(10, 250, 12);
	arc(50, 495, 25, 25, 0, piRun);
	arc(330, 495, 25, 25, 0, piRun);

	stroke(250, 10, 12)
	line(190, 485, 210, 505);
	line(190, 505, 210, 485);

	line(350, 485, 370, 505);
	line(350, 505, 370, 485);

	stroke(255);
	line(78, 495, 85, 495);
	line(225, 495, 232, 495);
	line(385, 495, 392, 495);
	pop();


	if(yRun <= 369) {
		yRun += 20;
	} else {
		yRun = 370;
	}

	if(piRun < TWO_PI) {
		piRun += 0.2;
	} else {
		piRun = TWO_PI;
	}

	if(xRun <= 369) {
		xRun += 15;
	} else {
		xRun = 370;
	}

	for(let ell of oPlayer) {
		ell.show();
	}
	for(let x of xPlayer) {
		x.show();
	}

}

function play() {
	var oCheck = 0;
	var xCheck = 0;
		//row check
	if(!xWin && !oWin && !tie) {
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				if(grid[i][j] == 1) {
					oCheck++;
				} else if(grid[i][j] == 2) {
					xCheck++;
				}
				lineYi = i;
				lineYf = i;
				if(xCheck == 3 || oCheck == 3) {
					break;
				}
			}
			if(oCheck == 3) {
				oWin = true;
				lineXi = 0;
				lineXf = 2;
				break;
			} else if(xCheck == 3) {
				lineXi = 0;
				lineXf = 2;
				xWin = true;
				break;
			}
			oCheck = 0;
			xCheck = 0;
		}
	}
	if(!xWin && !oWin && !tie) {
		//col check
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				if(grid[j][i] == 1) {
					oCheck++;
				} else if(grid[j][i] == 2) {
					xCheck++;
				}
				lineXi = i;
				lineXf = i;
				if(xCheck == 3 || oCheck == 3) {
					break;
				}
			}
			if(oCheck == 3) {
				oWin = true;
				lineYi = 0;
				lineYf = 2;
				break;
			} else if(xCheck == 3) {
				xWin = true;
				lineYi = 0;
				lineYf = 2;
				break;
			}
			oCheck = 0;
			xCheck = 0;
		}
	}

	if(!xWin && !oWin && !tie) {
		//diagonal Check1
		for(var i = 0; i < 3; i++) {
			if(grid[i][i] == 1) {
				oCheck++;
			} else if(grid[i][i] == 2) {
				xCheck++;
			}
			if(oCheck == 3) {
				oWin = true;
				lineXi = 0;
				lineYi = 0;
				lineYf = 2;
				lineXf = 2;
				break;
			} else if(xCheck == 3) {
				xWin = true;
				lineXi = 0;
				lineYi = 0;
				lineYf = 2;
				lineXf = 2;
				break;
			}
		}
	}
		//diagonal Check2
	oCheck = 0;
	xCheck = 0;

	if(!xWin && !oWin && !tie) {
		for(var i = 0, j = 2; i < 3, j >= 0; i++, j--) {
			if(grid[i][j] == 1) {
				oCheck++;
			} else if(grid[i][j] == 2) {
				xCheck++;
			}
			if(oCheck == 3) {
				oWin = true;
				lineXi = 0;
				lineYi = 2;
				lineYf = 0;
				lineXf = 2;
				break;
			} else if(xCheck == 3) {
				xWin = true;
				lineXi = 0;
				lineYi = 2;
				lineYf = 0;
				lineXf = 2;
				break;
			}
		}
	}

	if(!xWin && !oWin && !tie) {
		//check tie
		var tieScore = 0;
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				if(grid[i][j]) {
					tieScore++;
				}
			}
		}
		if(tieScore == 9) {
			tie = true;
		}
	}
	if(playerTurn == 'O' && playerVsAIgameRunning && !xWin && !oWin && !tie) {
		AImove();
	}
	if(oWin) oScore++;
	if(xWin) xScore++;
	if(tie) {
		xoScore++;
	}
}

function AImove() {
		var bestHeuristic = -Infinity;
		var nextMove;
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				//if spot is available
				if(grid[i][j] == 0) {
					grid[i][j] = 1;
					var heuristic = minimax(grid, 0, false);
					grid[i][j] = 0;
					if(heuristic > bestHeuristic) {
						bestHeuristic = heuristic;
						nextMove = {i,j};
					}
				}
			}
		}
		grid[nextMove.i][nextMove.j] = 1;
		playerTurn = 'X';
		oPlayer.push(new Ellipse(40 + nextMove.j*10 + nextMove.j*boxSize + boxSize/2, 50 + nextMove.i*10 + nextMove.i*boxSize + boxSize/2, boxSize/2, boxSize/2));
}

var heuristics = {
	1: 1,
	2: -1,
	3: 0
}

function minimax(grid, depth, isMaximizing) {
	var result = checkAIWin();
	if(result != null) {
		return heuristics[result];
	}
	if(isMaximizing) {
		var bestHeuristic = -Infinity;
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				if(grid[i][j] == 0) {
					grid[i][j] = 1;
					var heuristic = minimax(grid, depth + 1, false);
					grid[i][j] = 0;
					if(heuristic > bestHeuristic) {
						bestHeuristic = heuristic;
					}
				}
			}
		}
		return bestHeuristic;
	} else {
		var bestHeuristic = Infinity;
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				if(grid[i][j] == 0) {
					grid[i][j] = 2;
					var heuristic = minimax(grid, depth + 1, true);
					grid[i][j] = 0;
					if(heuristic < bestHeuristic) {
						bestHeuristic = heuristic;
					}
				}
			}
		}
		return bestHeuristic;
	}
}

function checkAIWin() {
	if(difficulty == 0) {
		return 1;
	}
	var oCheck = 0;
	var xCheck = 0;
		//row check
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				if(grid[i][j] == 1) {
					oCheck++;
				} else if(grid[i][j] == 2) {
					xCheck++;
				}
				if(xCheck == 3 || oCheck == 3) {
					break;
				}
			}
			if(oCheck == 3) {
				return 1;
			} else if(xCheck == 3) {
				return 2;
			}
			oCheck = 0;
			xCheck = 0;
		}
		//col check
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				if(grid[j][i] == 1) {
					oCheck++;
				} else if(grid[j][i] == 2) {
					xCheck++;
				}

				if(xCheck == 3 || oCheck == 3) {
					break;
				}
			}
			if(oCheck == 3) {
				return 1;
			} else if(xCheck == 3) {
				return 2;
			}
			oCheck = 0;
			xCheck = 0;
		}

		//diagonal Check1
		for(var i = 0; i < 3; i++) {
			if(grid[i][i] == 1) {
				oCheck++;
			} else if(grid[i][i] == 2) {
				xCheck++;
			}
			if(oCheck == 3) {
				return 1;
			} else if(xCheck == 3) {
				return 2;
			}
		}
		//diagonal Check2
	oCheck = 0;
	xCheck = 0;

		for(var i = 0, j = 2; i < 3, j >= 0; i++, j--) {
			if(grid[i][j] == 1) {
				oCheck++;
			} else if(grid[i][j] == 2) {
				xCheck++;
			}
			if(oCheck == 3) {
				return 1;
			} else if(xCheck == 3) {
				return 2;
			}
		}

		//check tie
		var tieScore = 0;
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				if(grid[i][j]) {
					tieScore++;
				}
			}
		}
		if(tieScore == 9) {
			return 3;
		} else {
			return null;
		}
}

function finishScreen(xi, yi, xf, yf) {
	if(!tie) {
		push();
		strokeWeight(5);
		if(playerVsAIgameRunning && xWin) {
			stroke(10, 200, 10);
		} else {
			stroke(200, 10, 10);
		}
		stroke(25, 100, 186)
		line(40 + 10*(xi) + boxSize*(xi) + boxSize/2, 50 + 10*(yi) + boxSize*(yi) + boxSize/2 , 40 + 10*(xf) + boxSize*(xf) + boxSize/2, 50 + 10*(yf) + boxSize*(yf) + boxSize/2);
		pop();
	}
	push();
	textFont(googleFontCourierPrime);
	textSize(50);
	textAlign(CENTER);
	fill(255);
	if(xWin) {
		if(playerVsAIgameRunning) {
			text("YOU WIN!", width/2, 580);
		} else {
			text("X WINS!", width/2, 580);
		}
	} else if(oWin) {
		if(playerVsAIgameRunning) {
			text("AI WINS!", width/2, 580);
		} else {
			text("O WINS!", width/2, 580);
		}
	} else {
		text("TIE!", width/2, 580);
	}
	fill(255);
	rect(70, 612, 310, 45, 10);
	rect(150, 715, 150, 40, 10);
	fill(0);
	text("PLAY AGAIN", width/2, 650);
	text("EXIT", width/2, 750);
	pop();
}
