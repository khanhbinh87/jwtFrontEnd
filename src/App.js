import './App.scss'
import Nav from './components/Navigation/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  

} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import User from './components/ManagerUser/User';

import _ from 'lodash'
import { useEffect, useState } from 'react';

function App() {
  const [account, setAccount] = useState({})
  useEffect(() => {
    let session = sessionStorage.getItem('account')
    if (session) {
      setAccount(JSON.parse(session))
    }
  
  }, [])
  return (
    <Router>
      <div className='app-container'>

        {
          account && !_.isEmpty(account) && account.isAuth && <Nav />
        }
        <Switch>
          <Route path="/about">
            About
          </Route>
          <Route path="/news">
            News
          </Route>
          <Route path="/contact">
            Contact
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="*">
            404 Not Found
          </Route>
        </Switch>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </Router>
  );
}

export default App;
