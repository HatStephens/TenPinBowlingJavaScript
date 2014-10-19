function Game() {
	this.turns = []
	for(var i=0; i<10; i++){
		this.turns.push(new Turn(i+1));
	}
	this.bowlScores = [];
	this.turnScores = [];
	this.totalScore = 0;
};

Game.prototype.getBowlScores = function() {
	for(var i=0; i<10; i++){
		this.bowlScores.push(this.turns[i].scoreBallOne)
		this.bowlScores.push(this.turns[i].scoreBallTwo)
	}
};

Game.prototype.getTurnScores = function(number) {
	if(this.turns[number].checkBonus() === "Spare") return this._spareBonus(number);
	if(this.turns[number].checkBonus() === "Strike") return this._strikeBonus(number);
	return this.turns[number].scoreBoth();
};

Game.prototype._spareBonus = function(number) {
	return this.turns[number].scoreBoth() + this.turns[number+1].scoreBallOne;
};

Game.prototype._strikeBonus = function(number) {
	if(this.turns[number+1].checkBonus() === "Strike") return this.turns[number].scoreBoth() + this.turns[number + 1].scoreBoth() + this.turns[number+2].scoreBallOne;
	return this.turns[number].scoreBoth() + this.turns[number+1].scoreBallOne + this.turns[number+1].scoreBallTwo;
};

Game.prototype.calculateTotalScore = function () {
	for(var turn=0; turn<10; turn++){
		this.totalScore += this.getTurnScores(turn);
	}
	return this.totalScore;
};





