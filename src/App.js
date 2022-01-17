import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Contact from './component/Contact';
import StudentTable from './component/StudentTable';
import Student from './component/Student';

function App() {
  return (
     <Router>
       <Header/>
       <Routes>
         <Route path='/' element={<Navigate to='/home'/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/student' element={<StudentTable/>}/>
         <Route path='/contact' element={<Contact/>}/>
        <Route path='/student-desc' element={ <Student show={false}/>}/>
        <Route path='/student-desc/:id' element={<Student show={true} />} />
       </Routes>
     </Router>

    
  );
}

export default App;
