import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewStudents from './components/ViewStudents';
import Addstudent from './components/Addstudent';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path='/' element={<ViewStudents/>}/>
        <Route path='/addstudent' element={<Addstudent/>}/>
        <Route path='/updatestudent' element={<Update/>}/>
     </Routes>
    </div>
  );
}

export default App;
