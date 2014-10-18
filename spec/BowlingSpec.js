describe('A Game', function() {

	beforeEach(function() {
		game = new Game();
	});

	it('should start with 10 turns', function() {
		expect(game.turns.length).toEqual(10);
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

	it('should know what turn it is in the game', function() {
		expect(secondTurn.turnInGame).toEqual(2);
	});

	it('should have the option of a first bowl', function() {
		expect(turn.bowlOne).toBeDefined();
	});

	it('should have the option of a second bowl', function() {
		expect(turn.bowlTwo).toBeDefined();
	});

	it('should always allow the first bowl', function() {
		turn.bowlBallOne(3);
		expect(turn.pins).toEqual(7);
	});

	it('should allow the second bowl if the first bowl scores less than 10', function() {
		turn.bowlBallOne(3);
		turn.bowlBallTwo(5);
		expect(turn.pins).toEqual(2);
	});

	it('should now allow the second bowl if the first one scores a strike', function() {
		turn.bowlBallOne(10);
		expect(turn.bowlBallTwo()).toBe(undefined)		
	});

	it('should calculate the score for ball one', function() {
		turn.bowlBallOne(3)
		expect(turn.scoreBallOne).toEqual(3);
	});

	it('should calculate the score for ball two', function() {
		turn.bowlBallOne(3)
		turn.bowlBallTwo(5)
		expect(turn.scoreBallTwo).toEqual(5);
	});

});

describe('A Bowl', function() {
	beforeEach(function() {
		turn = new Turn();
	});

	it('should drop pins when they are hit', function() {
		turn.bowlOne.pinsHit(3);
		expect(turn.pins).toEqual(7);
	});

	it('should not allow more pins to be hit than are present', function() {
		turn.bowlOne.pinsHit(8);
		expect(turn.bowlTwo.pinsHit(3)).toBe(undefined);
	});
});