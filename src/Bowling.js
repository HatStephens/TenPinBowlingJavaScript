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
	if(number===8 && this.turns[9].checkBonus() === "Strike") return this.turns[8]._scoreBoth() + this.turns[9]._scoreBoth();
	if(this.turns[number+1].checkBonus() === "Strike") return this.turns[number]._scoreBoth() + this.turns[number + 1]._scoreBoth() + this.turns[number+2].scoreBallOne;
	return this.turns[number]._scoreBoth() + this.turns[number+1]._scoreBoth();
};

Game.prototype._getFinalTurnScore = function() {
	var finalTurnScore = 0;
	if(this.turns[9].checkBonus() === 'Strike' && this.turns[9].scoreBallTwo === 10) return (20 + this.turns[9].scoreBallThree);
	if(this.turns[9].checkBonus() === 'Strike') return (10 + this.turns[9].scoreBallTwo + this.turns[9].scoreBallThree);
	return this.turns[9]._scoreBoth() + this.turns[9].scoreBallThree;
};




