// import React, { Component } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='book-list' style={{ color: theme.syntax, background: theme.bg}}>
      <ul>
        <li style={{ background: theme.ui }}>Zorba the Greek</li>
        <li style={{ background: theme.ui }}>Factfulness</li>
        <li style={{ background: theme.ui }}>Sapiens</li>
      </ul>
    </div>
  );
}

export default BookList;

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render(){
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
      // <div className='book-list' style={{ color: theme.syntax, background: theme.bg}}>
      //   <ul>
      //     <li style={{ background: theme.ui }}>Zorba the Greek</li>
      //     <li style={{ background: theme.ui }}>Factfulness</li>
      //     <li style={{ background: theme.ui }}>Sapiens</li>
      //   </ul>
      // </div>
//     );
//   }
// }

// export default BookList;