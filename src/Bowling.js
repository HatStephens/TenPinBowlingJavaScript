function Game() {
	this.turns = []
	for(var i=0; i<10; i++){
		this.turns.push(new Turn(i+1));
	}
};

function Turn(number) {
	this.pins = 10;
	this.scoreBallOne = 0;
	this.scoreBallTwo = 0;
	this.turnInGame = number;
	this.bowlOne = new Bowl(this);
	this.bowlTwo = new Bowl(this);
};


Turn.prototype._turnScore = function(number) {
	if(number === 1) return this.scoreBallOne = 10 - this.pins;
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


function Bowl(turn) {};

Bowl.prototype.pinsHit = function(number) {
	if(number>turn.pins) return undefined;
	return turn.pins -= number;
};