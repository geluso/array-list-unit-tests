const ArrayList = require('./YourArrayList.js')

let a10

function makeA10() {
  a10 = new ArrayList()
  a10.append(0)
  a10.append(1)
  a10.append(2)
  a10.append(3)
  a10.append(4)
  a10.append(5)
  a10.append(6)
  a10.append(7)
  a10.append(8)
  a10.append(9)
}

beforeEach(() => {
  makeA10()
})

describe('ArrayList', () => {
  describe('constructor', () => {
    it('starts w/ size zero and empty', () => {
      expect(true).toBe(false)
    })

    it('has a default capacity of 7', () => {
      expect(true).toBe(false)
    })

    it('accepts a smaller default capacity', () => {
      expect(true).toBe(false)
    })

    it('accepts a larger default capacity', () => {
      expect(true).toBe(false)
    })
  })

  describe('get/set/append/size', () => {
    it('should set valid indexes', () => {
      expect(true).toBe(false)
    })    

    it('should get valid indexes', () => {
      expect(true).toBe(false)
    })    

    it('should track size', () => {
      expect(true).toBe(false)
    })
  })

  describe('pop', () => {
    it('should return values', () => {
      expect(true).toBe(false)
    })

    it('should decrement size', () => {
      expect(true).toBe(false)
    })
  })

  describe('automatic-growth', () => {
    it('should automatically double the size of the array', () => {
      expect(true).toBe(false)
    })
  })

  describe('insertAtIndex', () => {
    it('can insert at the front', () => {
      expect(true).toBe(false)
    })

    it('can insert near the front', () => {
      expect(true).toBe(false)
    })

    it('can insert in the middle', () => {
      expect(true).toBe(false)
    })

    it('can insert at the end', () => {
      expect(true).toBe(false)
    })


    it('grows the array', () => {
      expect(true).toBe(false)
    })

    it('prepend is synonomous with insertAtIndex(0, val)', () => {
      expect(true).toBe(false)
    })
  })

  describe('removeAtIndex', () => {
    it('can remove at the front', () => {
      expect(true).toBe(false)
    })

    it('can remove at the end', () => {
      expect(true).toBe(false)
    })

    it('can remove in the middle', () => {
      expect(true).toBe(false)
    })
  })

  describe('isSorted', () => {
    it('empty array', () => {
      expect(true).toBe(false)
    })

    it('one-element array', () => {
      expect(true).toBe(false)
    })

    it('two-element ascending', () => {
      expect(true).toBe(false)
    })

    it('two-element descending', () => {
      expect(true).toBe(false)
    })

    it('lots ascending', () => {
      expect(true).toBe(false)
    })

    it('lots descending', () => {
      expect(true).toBe(false)
    })

    it('out of order', () => {
      expect(true).toBe(false)
    })
  })

  describe('indexOf / contains', () => {
    it('finds at the front', () => {
      expect(true).toBe(false)
    })

    it('finds at the end', () => {
      expect(true).toBe(false)
    })

    it('finds in the middle', () => {
      expect(true).toBe(false)
    })

    it('no false positives', () => {
      expect(true).toBe(false)
    })
  })

  describe('remove()', () => {
    it('removes elements in front/middle/back', () => {
      expect(true).toBe(false)
    })

    it('ignores elements not found', () => {
      expect(true).toBe(false)
    })
  })
})
