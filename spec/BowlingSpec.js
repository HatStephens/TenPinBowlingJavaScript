describe('A Game', function() {

	beforeEach(function() {
		game = new Game();
	});

	it('should start with 9 Turns and 1 Final Turn', function() {
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

	it('should score 0 for a Gutter Game', function() {
		for(var i=0; i<10; i++){
			game.turns[i].bowlBallOne(0);
			game.turns[i].bowlBallTwo(0);
		}
		expect(game.calculateTotalScore()).toEqual(0);
	});

	it('should be able to calculate the score of the final turn with a Strike', function() {
		game.turns[9].bowlBallOne(10);
		game.turns[9].bowlBallTwo(4);
		game.turns[9].bowlBallThree(5);
		expect(game._getFinalTurnScore()).toEqual(19)
	});

	it('should be able to calculate the score of the final turn with a Spare', function() {
		game.turns[9].bowlBallOne(6);
		game.turns[9].bowlBallTwo(4);
		game.turns[9].bowlBallThree(5);
		expect(game._getFinalTurnScore()).toEqual(15)
	});

	it('should be able to calculate the score of the final turn with no Strike or Spare', function() {
		game.turns[9].bowlBallOne(6);
		game.turns[9].bowlBallTwo(3);
		expect(game._getFinalTurnScore()).toEqual(9)
	});

	it('should score 300 for a Perfect Game', function() {
		for(var i=0; i<10; i++){
			game.turns[i].bowlBallOne(10);
		}
		game.turns[9].bowlBallTwo(10);
		game.turns[9].bowlBallThree(10);
		expect(game.calculateTotalScore()).toEqual(300);
	});
});

