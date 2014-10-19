describe('A Game', function() {

	beforeEach(function() {
		game = new Game();
	});

	it('should start with 10 turns', function() {
		expect(game.turns.length).toEqual(10);
	});

	it('should store the value of a normal turn', function() {
		game.turns[0].bowlBallOne(3);
		game.turns[0].bowlBallTwo(4);
		expect(game._getTurnScores(0)).toEqual(7);
	});

	it('should store the value of a Spare turn', function() {
		game.turns[0].bowlBallOne(6);
		game.turns[0].bowlBallTwo(4);
		game.turns[1].bowlBallOne(2);
		expect(game._getTurnScores(0)).toEqual(12);
	});

	it('should store the value of a Strike turn when not followed by a Strike', function() {
		game.turns[0].bowlBallOne(10);
		game.turns[1].bowlBallOne(2);
		game.turns[1].bowlBallTwo(4);
		expect(game._getTurnScores(0)).toEqual(16);
	});

	it('should store the value of a Strike turn when followed by a Strike', function() {
		game.turns[0].bowlBallOne(10);
		game.turns[1].bowlBallOne(10);
		game.turns[2].bowlBallOne(4);
		expect(game._getTurnScores(0)).toEqual(24);
	});

	it('should store the cumulative score', function() {
		game.turns[0].bowlBallOne(10);
		game.turns[1].bowlBallOne(10);
		game.turns[2].bowlBallOne(4);
		game.turns[2].bowlBallTwo(3);
		expect(game.calculateTotalScore()).toEqual(48);
	});

	it('should know if the final turn is a spare', function() {
		game.turns[9].bowlBallOne(5);
		game.turns[9].bowlBallTwo(5);
		expect(game.lastTurnCheck(9)).toEqual("Spare");
	});

	it('should know if the final turn is a strike', function() {
		game.turns[9].bowlBallOne(10);
		expect(game.lastTurnCheck(9)).toEqual("Strike");
	});

	it('should create an additional Turn(11) if the final turn is a strike', function() {
		game.turns[9].bowlBallOne(10);
		game.giveExtraTurn(9);
		expect(game.turns.length).toEqual(11);
	});

	it('should create an additional Turn(12) if final turn and additional turn is a strike', function() {
		game.turns[9].bowlBallOne(10);
		game.giveExtraTurn(9);
		game.turns[10].bowlBallOne(10);
		game.giveExtraTurn(10);
		expect(game.turns.length).toEqual(12);
	});

	it('should not allow the second ball of a Turn 12', function() {
		game.turns[9].bowlBallOne(10);
		game.giveExtraTurn(9);
		game.turns[10].bowlBallOne(10);
		game.giveExtraTurn(10);
		expect(game.turns[11].bowlTwo).toBe(undefined);
	});

	it('should create an additional Turn(11) if the final turn is a spare', function() {
		game.turns[9].bowlBallOne(5);
		game.turns[9].bowlBallTwo(5);
		game.giveExtraTurn(9);
		expect(game.turns.length).toEqual(11);
	});

	it('should not allow the second ball of a Turn 11 if Turn 10 was a spare', function() {
		game.turns[9].bowlBallOne(5);
		game.turns[9].bowlBallTwo(5);
		game.giveExtraTurn(9);
		expect(game.turns[10].bowlTwo).toBe(undefined);
	});
});

