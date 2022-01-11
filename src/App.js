import React from 'react';
import './App.css';
import Cards from './Components/Cards';

function App() {
  return (
    <div className='App' >
      <Cards 
        title = 'Card Title'
        imageUrl = 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        body = 'hello I,m the body of the card hello I,m the body of the card hello I,m the body of the card hello I,m the body of the card hello I,m the body of the card hello I,m the body of the card '
      />
    </div>

  );
}

export default App;
