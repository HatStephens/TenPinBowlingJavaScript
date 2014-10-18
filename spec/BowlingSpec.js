xdescribe('A Game', function() {

	it('should start with 10 turns', function() {

	});
});

xdescribe('A Turn', function() {

	it('should start with 10 pins', function() {
		turn = new Turn();
		expect(turn.pins).toEqual(10)
	});

};);