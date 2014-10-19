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