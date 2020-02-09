import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'Zorba the Greek', id: 1},
    {title: 'Factfulness', id: 2},
    {title: 'Sapiens', id: 3},
    {title: 'Harry Potter', id: 4},
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
