import React from 'react'
import { useParams} from 'react-router-dom'
import ReactStars from 'react-stars'
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../Firebase/Firebase'
import {ThreeDots } from "react-loader-spinner";
import { useState,useEffect } from 'react'
import Review from './Review'
const Details = () => {
  const {id} = useParams();
  const [loading, setloading] = useState(false)
  const [fetchIdData, setfetchIdData] = useState({
         title:"",
         year:"",
         image:"",
         description:"",
         rating:0,
         rated:0,
  })
  useEffect(() => {
    async function getData(){
        setloading(true)
        const _doc = doc(db,"FilmyStore",id)
        const _data= await getDoc(_doc)
        setfetchIdData(_data.data())
        setloading(false)
    }
    getData()
  }, [])
  
  return (
    
    <>
      {loading? <div className='threedot'><ThreeDots color='white'></ThreeDots></div>:
    <div className='detail-main'>
        <div className="detail-img">
          <img src={fetchIdData.image} alt=""  />
        </div>
        <div className="detail-info">
            <h1>{fetchIdData.title} <span>({fetchIdData.year})</span></h1>
            <ReactStars
            size={20}
            half={true}
            value={fetchIdData.rating/fetchIdData.rated}
            edit={false}
            ></ReactStars>
            <p>{fetchIdData.description}</p>
            <hr />
        <Review id={id} prevRating={fetchIdData.rating} userRated={fetchIdData.rated}></Review>
        </div>
    </div>
      }
    
    </>
  )
}

export default Details