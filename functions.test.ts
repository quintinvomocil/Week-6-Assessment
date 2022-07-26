const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Return same length array as given', () => {
        let array = [1, 2, 3, 4, 5]

        let length = array.length

        let shuffledArray = shuffleArray(array)
        let shuffleLength = shuffledArray.length

        expect(shuffleLength).toEqual(length)
    })  
    
    test('Should return an array', () => {
        expect(typeof shuffleArray).toBe('array')
    })
})