function Game() {
	this.turns = []
	for(var i=0; i<10; i++){
		this.turns.push(new Turn(i+1));
	}
	this.bowlScores = [];
	this.turnScores = [];
};

Game.prototype.getBowlScores = function() {
	for(var i=0; i<10; i++){
		this.bowlScores.push(this.turns[i].scoreBallOne)
		this.bowlScores.push(this.turns[i].scoreBallTwo)
	}
};

Game.prototype.getTurnScores = function(number) {
	if(this.turns[number].checkBonus() === "Spare") return this.turns[number].scoreBoth() + this.turns[number+1].scoreBallOne;
	if(this.turns[number].checkBonus() === "Strike" && this.turns[number+1].checkBonus() === "Strike") return this.turns[number].scoreBoth() + this.turns[number + 1].scoreBoth() + this.turns[number+2].scoreBallOne;
	if(this.turns[number].checkBonus() === "Strike") return this.turns[number].scoreBoth() + this.turns[number+1].scoreBallOne + this.turns[number+1].scoreBallTwo;
	return this.turns[number].scoreBoth();
};





function Turn(number) {
	this.pins = 10;
	this.scoreBallOne = null;
	this.scoreBallTwo = null;
	this.turnInGame = number;
	this.bowlOne = new Bowl(this);
	this.bowlTwo = new Bowl(this);
};


Turn.prototype._turnScore = function(bowlNumber) {
	if(bowlNumber === 1) return this.scoreBallOne = 10 - this.pins;
	return this.scoreBallTwo = 10 - this.scoreBallOne - this.pins;
};

Turn.prototype.bowlBallOne = function(number) {
	this.bowlOne.pinsHit(number);
	return this._turnScore(1);
};

Turn.prototype.bowlBallTwo = function(number) {
	if(this.pins === 0) return undefined;
	this.bowlTwo.pinsHit(number);
	return this._turnScore(2);
};

Turn.prototype.scoreBoth = function() {
	return this.scoreBallOne + this.scoreBallTwo;
};

Turn.prototype.checkBonus = function() {
	if(this.scoreBallOne === 10) return "Strike";
	if(this.scoreBoth() === 10) return "Spare";
	return "none";
};


function Bowl(turn) {
	this.turn = turn;
};

Bowl.prototype.pinsHit = function(number) {
	if(number>this.turn.pins) return undefined;
	return this.turn.pins -= number;
};