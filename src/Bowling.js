function Turn() {
	this.pins = 10
};

Turn.prototype.pinsHit = function(number) {
	this.pins -= number;
};