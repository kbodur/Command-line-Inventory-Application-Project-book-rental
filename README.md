# Command-line-Inventory-Application-Project-book-rental

# Rana Bookstore

Welcome to Rana Bookstore! This is a command-line application for managing a bookstore's inventory. You can create, update, delete, and view books in the inventory, as well as manage a shopping cart for customers.

## Features

- **Inventory Management**
  - Add new books to the inventory with unique IDs
  - Update existing book details
  - Delete books from the inventory
  - View the complete list of books

- **Shopping Cart**
  - Add books to the shopping cart
  - View items in the shopping cart with details in a table format
  - Cancel the shopping cart to empty it

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/kbodur/Command-line-Inventory-Application-Project-bookstore.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Command-line-Inventory-Application-Project-bookstore
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

### Commands

- **Create a book**

    ```sh
    npm run create "Title" "Author" PriceInCents InStock "Genre"
    ```

    Example:

    ```sh
    npm run create "The Great Gatsby" "F. Scott Fitzgerald" 999 true "Classic"
    ```

- **View all books**

    ```sh
    npm run index
    ```

- **Show details of a book**

    ```sh
    npm run show BookID
    ```

- **Update a book**

    ```sh
    npm run update BookID "NewTitle" "NewAuthor" NewPriceInCents NewInStock "NewGenre"
    ```

- **Delete a book**

    ```sh
    npm run destroy BookID
    ```

- **Add a book to the shopping cart**

    ```sh
    npm run addCart BookID
    ```

- **View the shopping cart**

    ```sh
    npm run viewCart
    ```

- **Cancel the shopping cart**

    ```sh
    npm run cancelCart
    ```

## Example Books

Here are some example books you can add to your inventory:

- **The Great Gatsby** by F. Scott Fitzgerald (Classic, $9.99)
- **Harry Potter and the Philosopher's Stone** by J.K. Rowling (Fantasy, $19.99)
- **Harry Potter and the Chamber of Secrets** by J.K. Rowling (Fantasy, $9.99)
- **Harry Potter and the Prisoner of Azkaban** by J.K. Rowling (Fantasy, $9.99)
- **Harry Potter and the Goblet of Fire** by J.K. Rowling (Fantasy, $9.99)
- **Harry Potter and the Order of the Phoenix** by J.K. Rowling (Fantasy, $9.99)

## Logo

```text
                 _._     _,-'""`-._
           (,-.`._,'(       |\`-/|
               `-.-' \ )-`( , o o)
                     `-    \`_`"'-                              
        __...--~~~~~-._   _.-~~~~~--...__
      //               `V'               \\
     //                 |                 \\
    //__...--~~~~~~-._  |  _.-~~~~~~--...__\\
   //__.....----~~~~._\ | /_.~~~~----.....__\\
  ====================\\|//====================
                      `---

                      Welcome to Rana Bookstore!
