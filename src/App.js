
import './App.css';

import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer";
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import ProductPage from './Context/Product/ProductPage';
import Users from './Context/Users/UsersList';
import { UsersProvider } from './Context/Users/Users';
import CreateUser from './Context/Users/CreateUser';

function App() {
  return (
    <>
    <BrowserRouter >
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar/>
          <UsersProvider>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard}/>
             <Route path="/users" exact component={Users}/>
             <Route path='/Formik-CreateUser' exact component={CreateUser} />
                <Route path='/Formik-editUser/:uid' exact component={CreateUser} /> 
            <Route path="/products" exact component={ProductPage} />
            <Route path="/" exact>
              <Redirect to='/dashboard' />
            </Route>
          </Switch>
          </UsersProvider>
        </div>
         <Footer/>
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
