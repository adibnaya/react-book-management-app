React Book Management App
=========================

Introduction
------------

This project is a React-based web application for managing a book database. It offers functionality to create, read, update, and delete book entries, featuring a clean and intuitive user interface.

Features
--------

*   CRUD operations on book entries.
*   Responsive design for ease of use across various devices.
*   Utilizes React context for state management.

#### Key Components

1.  **BookCreate.js**: Component for creating new book entries.
2.  **BookEdit.js**: Allows users to edit existing book entries.
3.  **BookList.js**: Displays a list of all books.
4.  **BookShow.js**: Shows detailed information for a specific book.

#### Context

*   **books.js**: Manages the React context for the book data, facilitating state sharing across the app.

#### Custom Hooks

*   **use-books-context.js**: A custom hook for easy access and management of the book context.

#### API Interactions (`api.http`)

*   **GET Request**: Fetches all books.
*   **POST Request**: Adds a new book.
*   **PUT Request**: Updates an existing book.
*   **DELETE Request**: Removes a book entry.

#### Database (`db.json`)

*   Utilizes `json-server` to simulate a REST API with a `books` array, where each book object includes a `title` and an `id`.

Getting Started
---------------

### Prerequisites

*   Node.js
*   npm

### Installation

1.  Clone the repository:

    bashCopy code

    `git clone https://github.com/adibnaya/react-book-management-app.git`

2.  Navigate to the project directory:

    bashCopy code

    `cd react-book-management-app`

3.  Install dependencies:

    bashCopy code

    `npm install`


### Running the Application

1.  Start the mock backend server:

    bashCopy code

    `json-server --watch db.json`

2.  In a separate terminal, start the React app:

    bashCopy code

    `npm start`

3.  Access the app at `http://localhost:3000`.

Usage
-----

*   **Create**: Add new book entries using the 'Add Book' feature.
*   **Read**: View all books on the main page.
*   **Update**: Edit book details by selecting a book.
*   **Delete**: Remove books from the database.

Contributing
------------

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

License
-------

Distributed under the MIT License. See `LICENSE` file for more information.

* * *

For more information or support, please contact adibnaya@gmail.com.

* * *