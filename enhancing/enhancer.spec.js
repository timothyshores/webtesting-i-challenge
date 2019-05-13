const { repair, succeed } = require('./enhancer.js');

describe('enhancer.js', () => {
    describe('repair() method', () => {
        const item = { durability: 0 }
        const expected = { durability: 100 }
        const actual = repair(item);
        it('returns a new item', () => {
            expect(actual).not.toBe(expected);
        });
        it('new item has durability 100.', () => {
            expect(actual).toEqual(expected);
        });
    });
    describe('success() method', () => {
        it('increases the item\'s enhancement by 1 ', () => {
            const item = { enhancement: 0 }   
            const expected = { enhancement: 1 }
            const actual = succeed(item);
            expect(actual).toEqual(expected);
        });
        it('if the item enhancement level is 20, the enhancement level is not changed.', () => {
            const item = { enhancement: 20 }
            const expected = { enhancement: 20 }
            const actual = succeed(item);
            expect(actual).toEqual(expected);
        });
    });
});