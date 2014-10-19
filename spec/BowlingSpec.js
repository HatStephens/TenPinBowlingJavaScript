describe('A Game', function() {

	beforeEach(function() {
		game = new Game();
	});

	it('should start with 10 turns', function() {
		expect(game.turns.length).toEqual(10);
	});

	it('should store the value of every ball', function() {
		game.getBowlScores();
		expect(game.bowlScores.length).toEqual(20);
	});  // is this needed???

	it('should store the value of a normal turn', function() {
		game.turns[0].bowlBallOne(3);
		game.turns[0].bowlBallTwo(4);
		expect(game.getTurnScores(0)).toEqual(7);
	});

	it('should store the value of a Spare turn', function() {
		game.turns[0].bowlBallOne(6);
		game.turns[0].bowlBallTwo(4);
		game.turns[1].bowlBallOne(2);
		expect(game.getTurnScores(0)).toEqual(12);
	});

	it('should store the value of a Strike turn when not followed by a Strike', function() {
		game.turns[0].bowlBallOne(10);
		game.turns[1].bowlBallOne(2);
		game.turns[1].bowlBallTwo(4);
		expect(game.getTurnScores(0)).toEqual(16);
	});

	it('should store the value of a Strike turn when followed by a Strike', function() {
		game.turns[0].bowlBallOne(10);
		game.turns[1].bowlBallOne(10);
		game.turns[2].bowlBallOne(4);
		expect(game.getTurnScores(0)).toEqual(24);
	});

	it('should store the cumulative score', function() {
		game.turns[0].bowlBallOne(10);
		game.turns[1].bowlBallOne(10);
		game.turns[2].bowlBallOne(4);
		game.turns[2].bowlBallTwo(3);
		expect(game.calculateTotalScore()).toEqual(48);
	});
});

