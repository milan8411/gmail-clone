import React, { useEffect } from 'react'; 
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link , Routes} from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import Sidebar from './Sidebar';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect (()=>{
    auth.onAuthStateChanged(user =>  {
      if (user) {
        // the user is logged in 
        dispatch(
          login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        })
        );
      }  
    });
  },[])


  return (
<>
    { !user ? (
      <Login />
      ) : (
        <div className="app">
          <Header></Header>

          <div className='app__body'>
            <Sidebar></Sidebar>   
            <Routes>
              <Route path='/mail' element = {<Mail/>} />
     
              <Route path='/email' element = {<EmailList/>} />
            </Routes>            
          </div>
            {sendMessageIsOpen &&  <SendMail />}
        </div>
     )};
  </>    
  );

};

export default App;
