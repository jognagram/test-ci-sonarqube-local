const multi = require('../code/multi');

describe('multi', () => {
    it('should multi two numbers', () => {
        expect(multi(2,2)).toBe(4);
    });
});