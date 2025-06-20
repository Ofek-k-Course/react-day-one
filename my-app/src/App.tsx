import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './Features/ProductCard/ProductCard'
function App() {
  return (
    <div className="App">
      <ProductCard 
        name={'vallyball'}
       price={50} 
       imageUrl={'https://img.freepik.com/free-vector/volleyball-sports-ball_78370-346.jpg?semt=ais_hybrid&w=740'}
      />
      <ProductCard 
        name={'baseball'}
       price={20} 
       imageUrl={'https://www.shutterstock.com/image-vector/baseball-icon-concept-moving-vector-600nw-2199062463.jpg'}
      />
    </div>
  );
}

export default App;
