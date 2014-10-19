function Bowl(turn) {
	this.turn = turn;
};

Bowl.prototype.pinsHit = function(number) {
	if(number>this.turn.pins) return undefined;
	return this.turn.pins -= number;
};