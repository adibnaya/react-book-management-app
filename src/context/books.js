import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider ({ children }) {
  const [ books, setBooks ] = useState([]);

  const fetchBooks = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      // Update the books state with the fetched data
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  },[]);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const updateBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title
    });

    const updatedBooks = books.map((book) => {
      if (book.id === response.data.id) {
        return {...book, ...response.data};
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    if (response.status === 200) {
      const updatedBooks = books.filter((book) => {
        return id !== book.id;
      });
      setBooks(updatedBooks);
    }
  };

  const shared = {
    books,
    fetchBooks,
    createBook,
    updateBook,
    deleteBookById,
  };

  return <BooksContext.Provider value={ shared }>
    {children}
  </BooksContext.Provider>
}

export { Provider };
export default BooksContext;