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

