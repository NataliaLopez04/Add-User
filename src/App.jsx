import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
import Modals from "./Components/Modals";
function App() {
  /* const initialUsers = [
    {
      id: 1,
      firstName: "Natalia",
      lastName: "López",
      birthday: "04-09-1991",
      email: "nata_lia49@hotmail.com",
      password: "123456",
    },
    {
      id: 2,
      firstName: "Alana",
      lastName: "Payán",
      birthday: "25-02-1994",
      email: "apava94@hotmail.com",
      password: "1234567",
    },
  ]; */

  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [opeModal, setOpenModal] = useState(false);

  const modalCance = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsersList(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsersList(res.data));
  };

  const addUser = (newUser) => {
    /*  alert(newUser.firstName); */
    /* setUsersList([...usersList, newUser]); */
    axios
      .post(`https://users-crud1.herokuapp.com/users/`, newUser)
      .then((res) => getUsers())
      .catch((error) => console.log(error.response?.data));
  };

  const deleteUser = (id) => {
    modalCance();
    /*  const filteredUsers = usersList.filter((user) => user.id !== id);
    setUsersList(filteredUsers); */
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id} /`)
      .then((res) => getUsers());
  };

  const selectUser = (user) => {
    setUserSelected(user);
    /* alert(user.firstName); */
  };

  const updateUser = (editedUser) => {
    /*  alert("Actualizando"); */
    /* editedUser.id = userSelected.id;
    const index = usersList.findIndex((user) => user.id === editedUser.id);
    usersList[index] = editedUser;
    setUsersList([...usersList]); */
    axios
      .put(
        `https://users-crud1.herokuapp.com/users/ ${userSelected.id} /`,
        editedUser
      )
      .then(() => {
        getUsers();
      })
      .catch((error) => console.log(error.response?.data));
    setUserSelected(null);
  };
  console.log(userSelected);

  return (
    <>
      <div className="App">
        <UsersForm
          addUser={addUser}
          userSelected={userSelected}
          updateUser={updateUser}
        />
        <UsersList
          usersList={usersList}
          deleteUser={deleteUser}
          selectUser={selectUser}
        />
        {/* {opeModal && <Modals closeModal={setOpenModal} />} */}
      </div>
    </>
  );
}

export default App;
