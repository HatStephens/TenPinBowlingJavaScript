function Turn(number, conditional) {
	this.pins = 10;
	this.scoreBallOne = null;
	this.scoreBallTwo = null;
	this.turnInGame = number;
	this.bowlOne = new Bowl(this);
	if(conditional!==1) this.bowlTwo = new Bowl(this);
};


Turn.prototype.bowlBallOne = function(number) {
	if(this.scoreBallOne !== null) return undefined;
	this.bowlOne.pinsHit(number);
	return this._turnScore(1);
};

Turn.prototype.bowlBallTwo = function(number) {
	if(this.pins === 0) return undefined;
	if(this.scoreBallTwo !== null) return undefined;
	this.bowlTwo.pinsHit(number);
	return this._turnScore(2);
};

Turn.prototype._turnScore = function(bowlNumber) {
	if(bowlNumber === 1) return this.scoreBallOne = 10 - this.pins;
	return this.scoreBallTwo = 10 - this.scoreBallOne - this.pins;
};

Turn.prototype.checkBonus = function() {
	if(this.scoreBallOne === 10) return "Strike";
	if(this._scoreBoth() === 10) return "Spare";
	return "none";
};

Turn.prototype._scoreBoth = function() {
	return this.scoreBallOne + this.scoreBallTwo;
};


