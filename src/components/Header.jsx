import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
const Header = () => {
  return (
   <>
  <div className='header'>
       <h1 className='main-name'>Filmy<span className='name-part2'>Store</span></h1>
       <div className="fav">
           <Button  className='button-85'><AddIcon></AddIcon>Add Your Favorite</Button> 
       </div>
  </div>
   </>
  )
}
  export default Header

