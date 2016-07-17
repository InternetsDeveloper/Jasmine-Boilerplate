//Notes: node_modules/.bin/jasmine-node spec

// Describe Suite of Tests:
describe('a set of problems to solve', function () {

    // Describe Individual Test:
    describe('a failing test', function () {
        it('must not be false', function () {
            expect(true).toBe(true);
        });

        it('is 5 > 3', function () {
            var expected = true;
            var assert;
            if (5 > 3) {
                assert = true;
            } else {
                assert = false;
            }
            expect(assert).toBe(expected);
        });
    });

});
