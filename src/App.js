import React from 'react';
import './App.css';
import { Routes, Route, Navigate, Link} from 'react-router-dom';
import FriendList from './components/friendsList';
import Login from './components/login';
import AddFriend from './components/addFriend';
import Logout from './components/logout';








function App() {
  return (
    <>
    <div>
        <Link className='Links' to='login'>Login</Link>
        <Link className ='Links' to='login'>Log out</Link>
        {/* <Link className='Links' to='friends/add'>AddFriend</Link> */}
      </div>
    
    <Routes> 
        <Route path="/" element={ <Login />} />
        <Route path="/login" element={ <Login />} Navigate to="/" />
        <Route path='/logout' element= { <Logout /> } Navigate to='/' />   
        
        

        <Route path="/friends" element={ <FriendList />} />
        <Route path="/friends/add" element={ <AddFriend />} />
    </Routes>    
    </>
      
        
        
      
    
      
  );
}     
      
    
    
    
  

export default App;
