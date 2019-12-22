
import React, { useState, useContext, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap-rtl.min.css';
import '../assets/css/myStyle.css'
import 'react-notifications/lib/notifications.css';
import AdminPanel from './adminPanel/AdminPanel';
import { AuthContext } from '../conext/AuthContext';
// import insWebApi1 from '../configs/axiosConfig';
//---------------------imports pages----------
import LoginForm2 from './login/LoginForm2';
import NotFound from './notFound/NotFound';
import PersonContextProvider from '../conext/PersonContext';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL from 'react-map-gl';





const ProtectedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route {...rest} render={(props) => (
    authUser === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
export default function App(props) {

  const authContext = useContext(AuthContext)
  const authUser = authContext.Auth.isLogin;
  //  console.log(authUser);
  // const [athenticated, setAthenticated] = useState(false)
  // useEffect(() => {
  //   if(localStorage.getItem('api_token')!=null){
  //     setAthenticated(true)
  //     console.log(localStorage.getItem('api_token'));
  //   };
  // })


  return (
    <>
      
        <Switch>
          <Route path="/login" component={LoginForm2} />
          <ProtectedRoute path="/" component={AdminPanel} authUser={authUser} />
        </Switch>
      
      

    </>
  );
}



const RestrictedRoute = ({ component: Component, authUser, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            //state: { from: props.location }
          }}
        />}
  />;