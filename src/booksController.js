const { nanoid } = require("nanoid");
const Table = require('cli-table');
const inform = console.log;
let cart = [];

function create(books, title, author, priceInCents, inStock, genre) {
  const book = {
    id: nanoid(4),
    title,
    author,
    priceInCents: parseInt(priceInCents, 10),
    inStock: inStock === 'true',
    genre
  };
  books.push(book);
  inform("Book successfully added");
  return books;
}
function index(books) {
    return books.map((book) => `${book.id} : ${book.title}`).join('\n');
}

function show(books, bookId) {
    const book = books.find((book) => book.id === bookId);
    if (book) {
        return `${book.id}: ${book.title} by ${book.author}, Price: ${book.priceInCents} cents, In Stock: ${book.inStock}, Genre: ${book.genre}`;
    }
    return "Book not found";
}

function destroy(books, bookId) {
    const index = books.findIndex((book) => book.id === bookId);
    if (index > -1) {
        books.splice(index, 1);
        inform("Book successfully removed from collection");
        return books;
    } else {
        inform("Book not found. No action taken");
        return books;
    }
}

function edit(books, bookId, updatedBookDetails) {
    const index = books.findIndex((book) => book.id === bookId);
    if (index > -1) {
        const [title, author, priceInCents, inStock, genre] = updatedBookDetails.split(" ");
        books[index] = {
            ...books[index],
            title,
            author,
            priceInCents: parseInt(priceInCents, 10),
            inStock: inStock === 'true',
            genre
        };
        inform("Book successfully updated");
        return books;
    } else {
        inform("Book not found. No action taken");
        return books;
    }
}

function addToCart(cart, books, bookId) {
    const book = books.find((book) => book.id === bookId);
    if (book) {
        cart.push(book);
    } else {
        inform("Book not found");
    }
    return cart;
}


function viewCart(cart) {
  if (cart.length === 0) {
      return "Cart is empty";
  }

  const table = new Table({
      head: ['ID', 'Title', 'Author', 'Price (cents)', 'Quantity', 'Total Price (cents)'],
      colWidths: [10, 20, 20, 15, 10, 20]
  });

  const cartSummary = cart.reduce((acc, book) => {
      if (!acc[book.id]) {
          acc[book.id] = { ...book, quantity: 0, totalPrice: 0 };
      }
      acc[book.id].quantity += 1;
      acc[book.id].totalPrice += book.priceInCents;
      return acc;
  }, {});

  Object.values(cartSummary).forEach(book => {
      table.push([
          book.id,
          book.title,
          book.author,
          book.priceInCents,
          book.quantity,
          book.totalPrice
      ]);
  });

  const total = cart.reduce((acc, book) => acc + book.priceInCents, 0);
  const itemCount = cart.length;

  return `${table.toString()}\nTotal items: ${itemCount}, Total price: ${total} cents`;
}



function cancelCart() {
    return [];
}

function displayInventory(books) {
    const table = new Table({
        head: ['ID', 'Title', 'Author', 'Price (cents)', 'In Stock', 'Genre'],
        colWidths: [10, 20, 20, 15, 10, 15]
    });

    books.forEach((book) => {
        table.push([book.id, book.title, book.author, book.priceInCents, book.inStock, book.genre]);
    });

    inform(table.toString());
}

function loadBooks(bookList) {
  books = bookList;
}

function testBookPrice(bookIds) {
  const selectedBooks = books.filter(book => bookIds.includes(book.id));
  return selectedBooks.reduce((acc, book) => acc + book.priceInCents, 0);
}
module.exports = { create, index, show, destroy, edit, addToCart, viewCart, cancelCart, displayInventory, loadBooks, testBookPrice };




