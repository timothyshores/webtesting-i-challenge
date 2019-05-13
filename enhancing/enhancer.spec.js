const { repair } = require('./enhancer.js');

describe('enhancer.js', () => {
    describe('repair() method', () => {
        const item = { durability: 0 }
        const expected = { ...item, durability: 100 }
        const actual = repair(item);
        it('returns a new item', () => {
            expect(actual).not.toBe(expected);
        });
        it('new item has durability 100.', () => {
            expect(actual).toEqual(expected);
        });
    });
});