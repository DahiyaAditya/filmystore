import React from 'react'
import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import {addDoc} from 'firebase/firestore';
import { movieData } from '../Firebase/Firebase';
import swal from 'sweetalert';



const AddMovie = () => {

  const [form , setForm] = useState(
    {
      title : "",
      year : "",
      image: "",
      description: "",
      rated:0,
      rating:0
    }
  );

 const changeTitle= (e)=>{
   setForm({...form , title: e.target.value})
 }
 const changeYear= (e)=>{
  setForm({...form , year: e.target.value})
 }
 const changeImage = (e)=>{
  setForm({...form , image: e.target.value})
 }
 const changeDes= (e)=>{
  setForm({...form , description: e.target.value})
 }

  const [loading , setLoading] = useState(false)
  
  const addMovies = async ()=>{
    setLoading(true);
    console.log("clicked");
    try {
        await addDoc(movieData, form);
        swal({
          title: "Successfully Added",
          icon: "success",
          buttons: false,
          timer: 3000
        })
    } catch(err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
    setLoading(false);
  }


  return (
    <>
      <div className="add-movie-main">
        <div className="add-main">
          <div className="add-title">
            <h1>Add Movie or Series</h1>
          </div>
          <div className="add-detail">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={changeTitle} />

            <label htmlFor="year">Year</label>
            <input
              type="text"
              name="year"
              id="year"
              // value={form.year}
              onChange={changeYear}
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              // value={form.image}
              onChange={changeImage}
            />
            <label htmlFor="title">discription</label>
            <br />
            <textarea
              cols={50}
              rows={5}
              type="text"
              name="discription"
              id="discription"
              // value={form.description}
              onChange={changeDes}
            />
            <button className="button-50" onClick={addMovies}>
              {loading ? <TailSpin height={25} color="white" /> : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddMovie





// {/* <div className='add-movie-main'>
//         <div className="add-main">
//           <div className="add-title">
//             <h1>Add a Movie or Series</h1>
//           </div>
//           <div className="add-detail">
//             <form>

// <div className="top-two">
//               <label>Title:
               
//               <input type="text"  placeholder='Enter Title.' value={form.title} onChange={changeTitle}/>
//               </label>
              
//               <label>Year:
                
//               <input type="text" placeholder='Enter Year Of Release.' value={form.year} onChange={changeYear}/>
//               </label>
//               </div>
              
//               <label htmlFor="image-link">Image Link
//               <input type="text" id='image-link' name='image-link' value={form.image} onChange={changeImage} />
//               </label>
//               <br />
//               <label htmlFor="Description">Description
            
//               <textarea rows="8" cols="50" id='Description' name='Description' placeholder='Add few details here' value={form.description} onChange={changeDes}></textarea>
//               </label>
//               <br />
//               <button className='button-50' onClick={addMovies}>{loading ? <TailSpin height={25} color="white" /> : 'Submit'}</button>
//             </form>
//           </div>
//         </div>
//       </div> */}




















    //   <div className="add-movie-main">
    //   <div className="add-main">
    //     <div className="add-title">
    //       <h1>Add Movie or Series</h1>
    //     </div>
    //     <div className="add-detail">
    //       <form>
    //         <label htmlFor="title">Title
    //         <input type="text" name='title' id='title' value={form.title} onChange={changeTitle} />
    //         </label>
    //         <label htmlFor="year">Year
    //         <input type="text" name='year' id='year' value={form.year} onChange={changeYear} />
    //         </label>
    //         <label htmlFor="image">Image
    //         <input type="text" name='image' id='image' value={form.image} onChange={changeImage} />
    //         </label>
    //         <label htmlFor="title">discription
    //         <textarea cols={60} rows={5} type="text" name='discription' id='discription' value={form.description} onChange={changeDes} />
    //         <button className='button-50' onClick={addMovies} >
    //             {loading ? <TailSpin height={25} color="white" /> : 'Submit'}
    //           </button>
    //         </label>
    //       </form>
    //     </div>
    //   </div>
    // </div>
            









    
  //   <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-white">
  //   Add Movie
  // </h1>

  //       <label for="name" class="leading-7 text-sm text-gray-300">
  //         Title
  //       </label>
  //       <input
  //         type="text"
  //         id="name"
  //         name="name"
  //         value={form.title}
  //         onChange={(e) => setForm({...form, title: e.target.value})}
  //         class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  //       />
      
    
  //       <label for="email" class="leading-7 text-sm text-gray-300">
  //         Year
  //       </label>
  //       <input
  //         type="email"
  //         id="email"
  //         name="email"
  //         value={form.year}
  //         onChange={(e) => setForm({...form, year: e.target.value})}
  //         class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  //       />
      
    
  //       <label for="message" class="leading-7 text-sm text-gray-300">
  //         Image Link
  //       </label>
  //       <input
  //         id="message"
  //         name="message"
  //         value={form.image}
  //         onChange={(e) => setForm({...form, image: e.target.value})}
  //         class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  //       />
      
    
  //       <label for="message" class="leading-7 text-sm text-gray-300">
  //         Description
  //       </label>
  //       <textarea
  //         id="message"
  //         name="message"
  //         value={form.description}
  //         onChange={(e) => setForm({...form, description: e.target.value})}
  //         class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
  //       ></textarea>
    
    
  //     <button onClick={addMovies} class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
  //       {loading ? <TailSpin height={25} color="white" /> : 'Submit'}
  //     </button>