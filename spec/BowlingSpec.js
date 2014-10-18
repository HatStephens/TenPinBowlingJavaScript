xdescribe('A Game', function() {

	it('should start with 10 turns', function() {

	});
});

describe('A Turn', function() {

	beforeEach(function() {
		turn = new Turn();
	});

	it('should start with 10 pins', function() {
		expect(turn.pins).toEqual(10);
	});

	it('should drop pins when they are hit', function () {
		turn.pinsHit(3)
		expect(turn.pins).toEqual(7);
	});

	it('should calculate the score for the turn', function() {
		turn.pinsHit(2)
		turn.pinsHit(6)
		turn.turnScore()
		expect(turn.score).toEqual(8)
	});

	it('should know what turn it is in the game', function() {
		secondTurn = new Turn(2);
		expect(secondTurn.turnInGame).toEqual(2);
	});

});