import React, { useReducer, useContext, createContext } from 'react';




export const AuthContext = createContext();
const CheckAuthorized=()=>{
 
  if(localStorage.getItem('api_token')!=null){
    //check api token with server
    return true;
  }

  return false;
}
const initialState = {
    api_token: '',
    isLogin: CheckAuthorized(),
    name: ''
}

const authReducer = (state, action) => {

  switch (action.type) {

      case 'LOGIN':
          return{
            api_token: action.userInfo.api_token,
            isLogin: true,
            name: action.userInfo.name
          }

          case 'LOGOUT':

              return{
                api_token: '',
                isLogin: false,
                name: ''
              }
         
  
      default:
          return state;
  }

}
const AuthContextProvider = (props) => {
    const [Auth, dispatch] = useReducer(authReducer, initialState)

    return (
        <AuthContext.Provider value={{ Auth, dispatch }}>

            {props.children}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;