import React, {useState} from 'react';
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';
import HalfStar from './assets/half-star.svg';
import './styles.css';


const RatingSystem = (props) => {
  const [rating, setRating] = useState(0)

  const stars = new Array(props.amount)
  stars.fill(1, 0)
  // console.log(props)
  function handleRating(i){
    if(rating === i + 1) setRating(0)
    else setRating(i + 1)
  }

  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
        <div className='bar'>
          {stars.map((star, i) => 
            <div className='star' onClick={() => {handleRating(i)}}>
              <img src={rating > i ? FilledStar : EmptyStar} alt="star" />
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
