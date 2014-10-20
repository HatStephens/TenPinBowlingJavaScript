function FinalTurn() {
	this.pins = 10;
	this.scoreBallOne = null;
	this.scoreBallTwo = null;
	this.scoreBallThree = null;
	// this.turnInGame = number;
	this.bowlOne = new Bowl(this);
	this.bowlTwo = new Bowl(this);
	this.bowlThree = new Bowl(this);
};

FinalTurn.prototype.bowlBallOne = function(number) {
	if(this.scoreBallOne !== null) return undefined;
	this.bowlOne.pinsHit(number);
	return this._bowlOneScore();
};

FinalTurn.prototype.bowlBallTwo = function(number) {
	if(this.checkBonus()==='Strike') this.pins = 10;
	if(this.scoreBallTwo !== null) return undefined;
	this.bowlTwo.pinsHit(number);
	return this._bowlTwoScore();
};

FinalTurn.prototype.bowlBallThree = function(number) {
	if(this._scoreBoth() < 10) return undefined;
	if(this.scoreBallThree !== null) return undefined;
	if(this.checkBonus()==="Spare") this.pins = 10;
	if(this.checkBonus()==="Strike" && this.pins === 0) this.pins = 10;
	this.bowlThree.pinsHit(number);
	return this._bowlThreeScore();
};

FinalTurn.prototype._bowlOneScore = function() {
	return this.scoreBallOne = 10 - this.pins;
};

FinalTurn.prototype._bowlTwoScore = function() {
	if(this.scoreBallOne === 10){
		return this.scoreBallTwo = 10 - this.pins;
	}
		return this.scoreBallTwo = 10 - this.scoreBallOne - this.pins;
};

FinalTurn.prototype._bowlThreeScore = function() {
	if(this.checkBonus()==="Spare") return this.scoreBallThree = 10 - this.pins;
	if(this.checkBonus()==="Strike" && this.scoreBallTwo === 10 ) return this.scoreBallThree = 10 - this.pins;
	return this.scoreBallThree = 10 - this.scoreBallTwo - this.pins
};

FinalTurn.prototype._scoreBoth = function() {
	return this.scoreBallOne + this.scoreBallTwo;
};

FinalTurn.prototype.checkBonus = function() {
	if(this.scoreBallOne === 10) return "Strike";
	if(this._scoreBoth() === 10) return "Spare";
	return "none";
};

