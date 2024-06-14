const { writeJSONFile, readJSONFile } = require('./src/helper');
const { create, index, show, destroy, edit, addToCart, viewCart, cancelCart, displayInventory } = require('./src/booksController');
const { logo } = require('./src/logo');
const inform = console.log;

function run() {
    const action = process.argv[2];
    const bookDetails = process.argv[3];
    let books = readJSONFile("./data", "books.json");
    let cart = readJSONFile("./data", "cart.json");
    let writeToFile = false;
    let updatedBooks = [];
    let updatedCart = [];

    inform(logo);

    try {
        switch(action) {
            case "index":
                inform(index(books));
                break;
            case "create":
                const [title, author, priceInCents, inStock, genre] = process.argv.slice(3);
                updatedBooks = create(books, title, author, priceInCents, inStock, genre);
                writeToFile = true;
                break;
            case "show":
                const singleBook = show(books, bookDetails);
                if (!singleBook) {
                    throw new Error(`Book with ID ${bookDetails} not found`);
                }
                inform(singleBook);
                break;
            case "update":
                updatedBooks = edit(books, bookDetails, process.argv[4]);
                writeToFile = true;
                break;
            case "destroy":
                updatedBooks = destroy(books, bookDetails);
                writeToFile = true;
                break;
            case "addToCart":
                updatedCart = addToCart(cart, books, bookDetails);
                writeJSONFile("./data", "cart.json", updatedCart);
                inform("Item added to cart");
                break;
            case "viewCart":
                inform(viewCart(cart));
                break;
            case "cancelCart":
                updatedCart = cancelCart();
                writeJSONFile("./data", "cart.json", updatedCart);
                inform("Cart has been emptied");
                break;
            case "inventory":
                displayInventory(books);
                break;
            default:
                throw new Error("Invalid action");
        }

        if (writeToFile) {
            writeJSONFile("./data", "books.json", updatedBooks);
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

run();
