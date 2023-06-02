import { getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactStars from 'react-stars'
import { movieData } from '../Firebase/Firebase'
import { Link } from 'react-router-dom'
import {ThreeDots } from "react-loader-spinner";
const Card = () => {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
      async function getData(){
        setloading(true);
         const data = await getDocs(movieData)
         data.forEach((obj)=>{
          setData((prev)=>[...prev , {...(obj.data()), id:obj.id}])
         })
         setloading(false);
      }
      getData()
    }, [])
    
  return (
    <>
     
    <div className="main">
    {loading ? <div className='threedot'><ThreeDots color='white'/></div> :
        data.map((obj,i)=>{return(
      <Link to={`/detail/${obj.id}`}><div key={i} className="main-card">
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
      </div></Link>
      )})
    }

    </div>
    </>
  )
}
export default Card

