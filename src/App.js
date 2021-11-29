import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/Adduser';
import UserList from './components/Users/UserList';

const App = props => {
 const [users, setUsers] = useState([]);
  const addUserHandler = userData => {
    setUsers(prevState => {
      return [...prevState, userData];
    })
  }
  return <div>
    <AddUser onUserData={addUserHandler} />
    <UserList users={users} />
  </div>
}

export default App;