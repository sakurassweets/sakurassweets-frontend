// import Navigation from './Navigation/Navigation';
import UserRoutes from './UserRoutes';
import { Header } from './Header/Header';

function App() {
  const BASE_URL = 'https://api.sakurassweets.asion.tk/';
  const data = {
    email: 'lizza@gmail.com',
    password: '12345678',
  };

  const register = () => {
    fetch(`${BASE_URL}register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const login = () => {
    fetch(`${BASE_URL}login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const getUsers = () => {
    fetch(`${BASE_URL}users/`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const getUserById = (id: number) => {
    fetch(`${BASE_URL}users/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const updateUserByPUT = (id: number) => {
    const updatedData = {
      password: '1111',
      email: 'vas@gmail.com',
    };
    fetch(`${BASE_URL}users/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const updateUserByPATCH = (id: number) => {
    const updatedData = {
      email: 'alma@gmail.com',
      password: '1111',
    };
    fetch(`${BASE_URL}users/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const deleteUser = (id: number) => {
    fetch(`${BASE_URL}users/${id}/`, {
      method: 'DELETE',
    });
  };

  return (
    <>
      <Header />
      {/* <Navigation /> */}
      <UserRoutes />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={getUsers}>Get Users</button>
      <button onClick={() => getUserById(5)}>Get User by ID</button>
      <button onClick={() => updateUserByPUT(5)}>Update User by Put</button>
      <button onClick={() => updateUserByPATCH(5)}>Update User by Patch</button>
      <button onClick={() => deleteUser(6)}>Delete</button>
    </>
  );
}

export default App;
