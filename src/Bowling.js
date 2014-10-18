function Game() {
	this.turns = []
	for(var i=0; i<10; i++){
		this.turns.push(new Turn(i+1));
	}
};

function Turn(number) {
	this.pins = 10;
	this.score = 0;
	this.turnInGame = number;
	this.bowls = [new Bowl(this), new Bowl(this)];
};


Turn.prototype._turnScore = function() {
	this.score = 10 - this.pins;
};


function Bowl(turn) {};

Bowl.prototype.pinsHit = function(number) {
	turn.pins -= number;
	return turn._turnScore();
};