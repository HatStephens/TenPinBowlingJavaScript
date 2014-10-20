function Game() {
	this.turns = []
	for(var i=0; i<9; i++){
		this.turns.push(new Turn(i+1));
	}
	this.turns.push(new FinalTurn());
	this.totalScore = 0;
};

Game.prototype.calculateTotalScore = function () {
	this.totalScore = 0;
	for(var turn=0; turn<9; turn++){
		this.totalScore += this._getTurnScores(turn);
	}
	this.totalScore += this._getFinalTurnScore();
	return this.totalScore;
};

Game.prototype._getTurnScores = function(number) {
	if(this.turns[number].checkBonus() === "Spare") return this._spareBonus(number);
	if(this.turns[number].checkBonus() === "Strike") return this._strikeBonus(number);
	return this.turns[number]._scoreBoth();
};

Game.prototype._spareBonus = function(number) {
	return this.turns[number]._scoreBoth() + this.turns[number+1].scoreBallOne;
};

Game.prototype._strikeBonus = function(number) {
	if(this.turns[number+1].checkBonus() === "Strike") return this.turns[number]._scoreBoth() + this.turns[number + 1]._scoreBoth() + this.turns[number+2].scoreBallOne;
	return this.turns[number]._scoreBoth() + this.turns[number+1].scoreBallOne + this.turns[number+1].scoreBallTwo;
};

Game.prototype.lastTurnCheck = function(number) {
	if(this.turns[number].checkBonus() === "Spare") return "Spare";
	if(this.turns[number].checkBonus() === "Strike") return "Strike";
};

Game.prototype.giveExtraTurn = function(number) {
	if(this.lastTurnCheck(number) === "Strike" && number === 10) return this.turns.push(new Turn(number+1, 1));
	if(this.lastTurnCheck(number) === "Strike") return this.turns.push(new Turn(number+1));
	if(this.lastTurnCheck(number) === "Spare") return this.turns.push(new Turn(number+1, 1));
};

Game.prototype._getFinalTurnScore = function() {
	
};





