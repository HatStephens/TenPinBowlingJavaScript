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

});