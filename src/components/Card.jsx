import React from 'react'
import { useState } from 'react'
import ReactStars from 'react-stars'
const Card = () => {
    const [data, setData] = useState(
        [
            {
                name: "Stranger Things",
                year: "2022",
                rating: 3,
                image: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                name: "Stranger Things",
                year: "2022",
                rating: 4,
                image: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                name: "Stranger Things",
                year: "2022",
                rating: 4.5,
                image: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ]
    )
  return (
    <>
    <div className="main">
        {data.map((obj,i)=>{return(
      <div key={i} className="main-card">
        <div className="card-img">
            <img src={obj.image} alt="movie poster" />
        </div>
        <div className="details">
            <h1>{obj.name}</h1>
            <h1>Rating: {obj.rating}</h1>
            <h1>
              <ReactStars
                value={obj.rating}
              ></ReactStars>
            </h1>
            <h1>Year: {obj.year}</h1>
        </div>
      </div>
      )})
      }
    </div>
    </>
  )
}
export default Card

