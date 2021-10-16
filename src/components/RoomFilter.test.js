const rewire = require("rewire")
const RoomFilter = rewire("./RoomFilter")
const getUnique = RoomFilter.__get__("getUnique")
// @ponicode
describe("getUnique", () => {
    test("0", () => {
        let callFunction = () => {
            getUnique([0, 256, 16], "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getUnique([10, 64, 0], "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getUnique([256, 10, 64], "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getUnique([10, 16, 16], "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getUnique([10, 64, 256], "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getUnique(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
