import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <>
  <div className='header'>
       <Link to={'/'}> <h1 className='main-name'>Filmy<span className='name-part2'>Store</span></h1></Link>
       <div className="fav">
        <Link to={'/addMovie'}>
           <Button  className='button-85'><AddIcon></AddIcon>Add Your Favorite</Button> 
        </Link>
       </div>
  </div>
   </>
  )
}
  export default Header

