const sous = require('../code/sous');

describe('sous', () => {
    it('should sous two numbers', () => {
        expect(sous(2,1)).toBe(1);
    });
});