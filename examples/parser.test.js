import { parseNumberInput } from "./parser"

describe("parseNumberInput", () => {
    it("should work with single numbers", () => {
        expect(parseNumberInput("0")).toEqual([0])
        expect(parseNumberInput("1")).toEqual([1])
        expect(parseNumberInput("24")).toEqual([24])
        expect(parseNumberInput(" 4")).toEqual([4])
        expect(parseNumberInput("13,")).toEqual([13])
        expect(parseNumberInput("   26  ")).toEqual([26])
        expect(parseNumberInput("105 ")).toEqual([105])
    })

    it("should work with single number groups", () => {
        expect(parseNumberInput("5, 9")).toEqual([5,9])
        expect(parseNumberInput("1, 2, 3, 4")).toEqual([1,2,3,4])
        expect(parseNumberInput("8,15")).toEqual([8,15])
        expect(parseNumberInput(" 200,  300")).toEqual([200,300])
    })

    it("should work with ranges", () => {
        expect(parseNumberInput("4-8")).toEqual([4,5,6,7,8])
        expect(parseNumberInput("15-17")).toEqual([15,16,17])
        expect(parseNumberInput("22-23")).toEqual([22,23])
        expect(parseNumberInput("1-6")).toEqual([1,2,3,4,5,6])
    })

    it("should work with ranges and groups", () => {
        expect(parseNumberInput("4-8, 1-2")).toEqual([1,2,4,5,6,7,8])
        expect(parseNumberInput("15-17,12")).toEqual([12,15,16,17])
        expect(parseNumberInput("22,8-10,14")).toEqual([8,9,10,14,22])
        expect(parseNumberInput("3,  6 - 9")).toEqual([3,6,7,8,9])
    })

    it("should ignore duplicates", () => {
        expect(parseNumberInput("15, 15, 15")).toEqual([15])
        expect(parseNumberInput("10-13,11")).toEqual([10,11,12,13])
        expect(parseNumberInput("1-4,2-5")).toEqual([1,2,3,4,5])
        expect(parseNumberInput("66,67,67-69,69")).toEqual([66,67,68,69])
    })

    it("should return null if it isn't parsable", () => {
        expect(parseNumberInput("hello")).toEqual(null)
        expect(parseNumberInput("10-13,a,3")).toEqual(null)
        expect(parseNumberInput("4,7-3")).toEqual(null)
        expect(parseNumberInput("-,-")).toEqual(null)
        expect(parseNumberInput("")).toEqual(null)
    })
})