function Turn(number) {
	this.pins = 10;
	this.score = 0;
	this.turnInGame = number;
};

Turn.prototype.pinsHit = function(number) {
	this.pins -= number;
};

Turn.prototype.turnScore = function() {
	this.score = 10 - this.pins;
};