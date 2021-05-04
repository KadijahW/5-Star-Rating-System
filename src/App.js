import React, {useState} from 'react';
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';
// import HalfStar from './assets/half-star.svg';
import './styles.css';
//git remote set-url origin (url)

const RatingSystem = (props) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [clicks, setClicks] = useState(0) //clicks
  const [total, setTotal]  = useState(0)//avg

  const userRating = new Array(props.amount)
  userRating.fill(1,0)

  const stars = new Array(props.amount)
  stars.fill(1, 0)
  // console.log(props)

  function handleRating(i){
    if(rating === i + 1){
      setRating(0)
    } 
    else {
      setRating(i + 1)
      setClicks(clicks + 1)
      setTotal((total + i + 1 ))
    }
  }

  function handleHover(i){
    setHover(i + 1)
  }

  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
      <h1>User Rating</h1>
        <div className='bar'>
          {stars.map((star, i) => 
            <div 
              className='star' 
              key = {i}
              onClick={() => {handleRating(i)}} 
              onMouseOver={() => {handleHover(i)}}
              onMouseOut={()=> {setHover(0)}}
            >
              <img 
                src =  {rating > i || hover > i ? FilledStar : EmptyStar} 
                alt = {rating > i || hover > i ? "Filled-Star" : "Empty-Star"} 
              />
            </div>
          )}
            </div>
            <h1>Average:{total/clicks}</h1>
            <div className='userBar'>
              {userRating.map((userRating, i)  => 
                <div className='userRate'>
              <img src={total/clicks >= i + 1 ? FilledStar : EmptyStar} />
            </div>
          )}
          </div>
          
        </div>
    // </div>
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
