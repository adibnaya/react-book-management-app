import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
  <div className="book-create">
    <h3>Add a Book</h3>
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <label>Enter book title</label>
      <input className="input" value={title} name="title" onChange={handleChange}/>
      <button className="button">Create!</button>
    </form>
  </div>
  );
}

export default BookCreate;