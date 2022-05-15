describe("ES2015 conversion", function () {
    it("should filter the odd numbers passed in", function () {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        expect(filterOutOdds(...arr)).toEqual([2, 4, 6, 8]);
    });
});

