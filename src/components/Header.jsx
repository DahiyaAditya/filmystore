import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { appState } from '../App';
const Header = () => {
  const useAppState = useContext(appState)
  return (
   <>
  <div className='header'>
       <Link to={'/'}> <h1 className='main-name'>Filmy<span className='name-part2'>Store</span></h1></Link>
       <div className="fav">
       {useAppState.login ?
         <Link to={'/addMovie'}>
         <Button  className='button-85'><AddIcon></AddIcon>Add Your Favorite</Button> 
      </Link>
      :
      <Link to={'/login'}>
         <Button  className='button-85' style={{color:"red"}}>Login</Button> 
      </Link>
      }

       
       </div>
  </div>
   </>
  )
}
  export default Header

