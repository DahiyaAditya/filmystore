import React from 'react'
import ReactStars from 'react-stars'
import { useState , useEffect} from 'react';
import { reviewData , db} from '../Firebase/Firebase';
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert'
const Review = ({id , prevRating, userRated}) => {
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false)
    const [thought, setThought] = useState("")
    const [data, setData] = useState([]);
    // const [newAdded, setNewAdded] = useState(0);
    const sendReview = async () => {
        setLoading(true);
        try {
            await addDoc(reviewData, {
                movieid: id,
                name: "Aditya Singh",
                rating: rating,
                thought: thought,
                timestamp: new Date().getTime()
            })
            const ref = doc(db, "FilmyStore", id);
            await updateDoc(ref, {
                rating: prevRating + rating,
                rated: userRated + 1
            })
            setRating(0);
            setThought("");
            // setNewAdded(newAdded + 1);
            swal({
                title: "Review Sent",
                icon: "success",
                buttons: false,
                timer: 3000
              })
        } catch (error) {
            swal({
                title: error.message,
                icon: "error",
                buttons: false,
                timer: 3000
              })
        }
        setLoading(false);
    }
    useEffect(() => {
        async function getReviewData(){
          let querr = query(reviewData , where('movieid', '==', id))  
          const _data = await getDocs(querr)
          _data.forEach(element => {
            setData((prev)=>[...prev , element.data()])
          });
        }
        getReviewData()
      }, [])

  return (
    <>
    <div className='review-main'>
    <ReactStars
    className='stars'
    size={30}
    half={true}
    value={rating}
    onChange={(rate) => setRating(rate)}
    ></ReactStars>    
    <input 
            value={thought}
            onChange={(e)=>setThought(e.target.value)}
            type='text'
            placeholder='Share Your thoughts...'
            
        />
        <button onClick={sendReview}>{loading ? <TailSpin  height={20} color="black" /> : 'Share'}</button>
        <div className='adding-data'>
        {data.map((e,i)=>{
           return(
            <>
            <div className='single-section'>
            <span>{e.name} ({new Date(e.timestamp).toLocaleString()})</span>
            <ReactStars
            size={15}
            half={true}
            value={e.rating}
            edit={false}
            ></ReactStars>
            <p>{e.thought}</p>
            </div>
            
            </>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Review