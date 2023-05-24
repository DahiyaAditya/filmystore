import React from 'react'

const AddMovie = () => {
  return (
    <>
    <div className="add-main">
        <div className="add-title">
         <h1>Add a Movie or Series</h1>
        </div>
        <div className="add-detail">
            <label htmlFor="Title">Title</label>
            <input type="text" />
            <label htmlFor="Year">Year</label>
            <input type="text" />
            <label htmlFor="image-link">Image Link</label>
            <label htmlFor="Description"></label>
            <input type="text" />
        </div>
    </div>
    </>
  )
}
export default AddMovie


