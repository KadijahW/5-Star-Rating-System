import React from 'react';
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';
import HalfStar from './assets/half-star.svg';
import './styles.css';


const RatingSystem = (amount) => {
  const stars = new Array(amount.amount)
  stars.fill(1, 0)
  // console.log(stars)
  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
        <div className='bar'>
          {stars.map((star, i) => 
            <div className='star'>
              <img src={EmptyStar} alt="empty star" />
            </div>
          )}
        </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <RatingSystem 
          amount = {5}
      />
    </div>
  )
};
