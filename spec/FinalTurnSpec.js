describe('A Final Turn', function() {

	beforeEach(function(){
		finale = new FinalTurn;
	});

	it('should have ten pins', function() {
		finale = new FinalTurn();
		expect(finale.pins).toEqual(10);
	});

	it('should have the option of a first bowl', function() {
		expect(finale.bowlOne).toBeDefined();
	});

	it('should have the option of a second bowl', function() {
		expect(finale.bowlTwo).toBeDefined();
	});

	it('should have the option of a third bowl', function() {
		expect(finale.bowlThree).toBeDefined();
	});

	it('should always allow the first bowl', function() {
		finale.bowlBallOne(3);
		expect(finale.pins).toEqual(7);
	});

	it('should know if the Final Turn starts with a Strike', function() {
		finale.bowlBallOne(10);
		expect(finale.checkBonus()).toEqual('Strike')
	});

	it('should allow the second bowl if the first bowl scored less than 10', function() {
		finale.bowlBallOne(3);
		finale.bowlBallTwo(4);
		expect(finale.pins).toEqual(3);
	});

	it('should allow the second bowl and reset the pins if the first bowl scored 10', function() {
		finale.bowlBallOne(10);
		finale.bowlBallTwo(3);
		expect(finale.pins).toEqual(7);
	});

	it('should know whether the Final Turn was a Spare', function() {
		finale.bowlBallOne(7);
		finale.bowlBallTwo(3);
		expect(finale.checkBonus()).toEqual('Spare')	
	});

	it('should not allow the third bowl if the first two score less than 10', function() {
		finale.bowlBallOne(3);
		finale.bowlBallTwo(4);
		expect(finale.bowlBallThree(1)).toBe(undefined);
	});

	it('should allow the third bowl and reset the pins if the first two bowls scored a Spare', function() {
		finale.bowlBallOne(5);
		finale.bowlBallTwo(5);
		finale.bowlBallThree(3)
		expect(finale.pins).toEqual(7);
	});

	it('should allow the third bowl if the first bowl was a Strike', function() {
		finale.bowlBallOne(10);
		finale.bowlBallTwo(4);
		finale.bowlBallThree(3);
		expect(finale.pins).toEqual(3);
	});

	it('should reset the pins for the third bowl if the first and second bowl were strikes', function() {
		finale.bowlBallOne(10);
		finale.bowlBallTwo(10);
		finale.bowlBallThree(4);
		expect(finale.pins).toEqual(6);
	});

	it('should not allow the first bowl to be bowled again', function() {
		finale.bowlBallOne(0);
		expect(finale.bowlBallOne(4)).toBe(undefined);
	});

	it('should not allow the second bowl to be bowled again', function() {
		finale.bowlBallTwo(0);
		expect(finale.bowlBallTwo(4)).toBe(undefined);
	});

	it('should not allow the third bowl to be bowled again', function() {
		finale.bowlBallThree(0);
		expect(finale.bowlBallThree(4)).toBe(undefined);
	});

});