import React, { useReducer, createContext } from 'react';

export const PersonContext = createContext();
const initialState = []
const personsReducer = (state, action) => {
    
    switch (action.type) {
        case 'GetListPersons':
            return  action.persons
        case 'DeletedPerson':
            return state.filter((person) => person.Id != action.Id)
        case 'AddNewPerson':
            return [...state, action.person]
        default:
            break;
    }

}
const PersonContextProvider = (props) => {
    const [persons, dispatch] = useReducer(personsReducer, initialState)
    return (
        <PersonContext.Provider value={{persons, dispatch}}>
            {props.children}

        </PersonContext.Provider>
    )
}



export default PersonContextProvider;
