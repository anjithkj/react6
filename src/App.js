import logo from './logo.svg';
import './App.css';
import Read from './Components/Read';
import Teacher from './Components/Teacher';
import Home from './Components/Home';
import Addstudents from './Components/Addstudents';
import{BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home></Home><Routes>
        {/* <Route path='/' element={<Teacher></Teacher>}></Route> */}
        <Route path='/Read' element={<Read></Read>}></Route>
        <Route path='Addstudents' element={<Addstudents></Addstudents>}>

          </Route></Routes></BrowserRouter>
    
       </div>
  );
}

export default App;
