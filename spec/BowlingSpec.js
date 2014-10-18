describe('A Game', function() {

	it('should start with 10 turns', function() {
		game = new Game();
		expect(game.turns.length).toEqual(10);
	});

	xit('should know how to score a Strike', function() {
		turn.pinsHit(10);
		secondTurn.pinsHit(3);
		secondTurn.pinsHit(5);
		expect(turn.score).toEqual(18)
	});
});

describe('A Turn', function() {

	beforeEach(function() {
		turn = new Turn();
		secondTurn = new Turn(2);
	});

	it('should start with 10 pins', function() {
		expect(turn.pins).toEqual(10);
	});

	it('should calculate the score for the turn', function() {
		turn.bowls[0].pinsHit(2);
		turn.bowls[1].pinsHit(6);
		expect(turn.score).toEqual(8);
	});

	it('should know what turn it is in the game', function() {
		expect(secondTurn.turnInGame).toEqual(2);
	});

	it('should be made up of two bowls', function() {
		expect(turn.bowls.length).toEqual(2);
	});
});

describe('A Bowl', function() {
	it('should drop pins when they are hit', function() {
		turn = new Turn(1);
		turn.bowls[0].pinsHit(3)
		expect(turn.pins).toEqual(7)
	});
});