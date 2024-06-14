const { loadBooks, testBookPrice } = require('../src/booksController')
 const  data  = require("../data/books.json")

describe('testBookPrice', () => {
  beforeAll(() => {
    loadBooks(data);
  });

  it('should return the correct total for a list of valid book IDs', () => {
    const bookIds = ["JyOc", "m3hA"];
    expect(testBookPrice(bookIds)).toBe(1099 + 1200);
  });

  it('should return 0 for an empty list of book IDs', () => {
    expect(testBookPrice([])).toBe(0);
  });

  it('should return 0 for invalid book IDs', () => {
    expect(testBookPrice(["invalidID1", "invalidID2"])).toBe(0);
  });
});
