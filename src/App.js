import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import AddMovie from './components/AddMovie';
import {  Route, Routes} from 'react-router-dom';
import Details from './components/Details';
function App() {
  return (
   <>
   <Header></Header>
   <Routes>
      <Route path='/' element={<Card></Card>}></Route>
      <Route path='/addMovie' element={<AddMovie></AddMovie>}></Route>
      <Route path='/detail/:id' element={<Details></Details>}></Route>
   </Routes>
   </>
    
  );
}

export default App;
