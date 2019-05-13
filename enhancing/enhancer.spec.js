const { repair, succeed, fail } = require('./enhancer.js');

describe('enhancer.js', () => {
    describe('items have a name, durability and enhancement', () => {
        it('items have a name', () => {
            const actual = { name: 'Sword' }
            expect(actual).toHaveProperty('name')
        });
        it('items have durability', () => {
            const actual = { durability: 10 }
            expect(actual).toHaveProperty('durability')
        });
        it('items have enhancement', () => {
            const actual = { enhancement: 20 }
            expect(actual).toHaveProperty('enhancement')
        });
    });
    describe("item's enhancement is a number", () => {
        it("item's enhancement is a number", () => {
            const actual1 = { enhancement: 10 }
            expect(typeof actual1.enhancement).toBe('number');
            const actual2 = { enhancement: '10' }
            expect(typeof actual2.enhancement).not.toBe('number');
            const actual3 = { enhancement: [10] }
            expect(typeof actual3.enhancement).not.toBe('number');
        });
    });
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
            const item = { enhancement: 0 };
            const expected = { enhancement: 1 };
            const actual = succeed(item);
            expect(actual).toEqual(expected);
        });
        it('if the item enhancement level is 20, the enhancement level is not changed.', () => {
            const item = { enhancement: 20 };
            const expected = { enhancement: 20 };
            const actual = succeed(item);
            expect(actual).toEqual(expected);
        });
        it('does not change the durability of the item', () => {
            const item = { enhancement: 0, durability: 100 };
            const expected = { enhancement: 1, durability: 100 };
            const actual = succeed(item);
            expect(actual).toEqual(expected);
        });
    });
    describe('fail() method', () => {
        it("if the item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
            const item = { enhancement: 10, durability: 5 };
            const expected = { enhancement: 10, durability: 0 };
            const actual = fail(item);
            expect(actual).toEqual(expected);
        });
        it("if the item's enhancement is 15 or more, the durability of the item is decreased by 10", () => {
            const item = { enhancement: 15, durability: 10 };
            const expected = { enhancement: 15, durability: 0 };
            const actual = fail(item);
            expect(actual).toEqual(expected);
        });
    });
});