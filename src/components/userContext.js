import React from 'react'

const UserContext = React.createContext({name: 'x', age: 'y'});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export default UserContext; 
export { UserProvider, UserConsumer }