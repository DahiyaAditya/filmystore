import Header from './components/Header';
import Card from './components/Card';
import AddMovie from './components/AddMovie';
import {  Route, Routes} from 'react-router-dom';
import Details from './components/Details';
import { createContext ,useState} from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const appState = createContext();

function App() {
   const [login, setLogin] = useState(false)
   const [userName, setUserName] = useState("")
  return (
   <>
   <appState.Provider  value={ {login, userName, setLogin,setUserName}}>
   <Header></Header>
   <Routes>
      <Route path='/' element={<Card></Card>}></Route>
      <Route path='/addMovie' element={<AddMovie></AddMovie>}></Route>
      <Route path='/detail/:id' element={<Details></Details>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
   </Routes>
   </appState.Provider>
   </>
    
  );
}

export default App;
export  {appState};