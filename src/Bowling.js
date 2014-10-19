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





