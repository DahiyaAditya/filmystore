import { getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactStars from 'react-stars'
import { movieData } from '../Firebase/Firebase'
const Card = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      async function getData(){
         const data = await getDocs(movieData)
         data.forEach((obj)=>{
          setData((prev)=>[...prev , {...(obj.data()), id:obj.id}])
         })
      }
      getData()
    }, [])
    
  return (
    <>
    <div className="main">
        {data.map((obj,i)=>{return(
      <div key={i} className="main-card">
        <div className="card-img">
            <img src={obj.image} alt="movie poster" />
        </div>
        <div className="details">
            <h1>{obj.title}</h1>
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

