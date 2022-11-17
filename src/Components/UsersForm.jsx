import React, { useEffect, useState } from "react";
import User from "../assets/name.png";
import Cake from "../assets/birthday_cake.png";
import Email from "../assets/email.png";
import Private from "../assets/private.png";

const UsersForm = ({ addUser, userSelected, updateUser }) => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      console.log(userSelected);
      setFirst_name(userSelected.first_name);
      setLast_name(userSelected.last_name);
      setBirthday(userSelected.birthday);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
    }
  }, [userSelected]);

  const usersSubmit = (e) => {
    e.preventDefault();

    const user = {
      /* id: Date.now, */
      first_name: first_name,
      last_name: last_name,
      birthday: birthday,
      email: email,
      password: password,
    };
    if (userSelected) {
      updateUser(user);
    } else {
      addUser(user);
      /* console.log(newUser); */
    }
    reset();
  };

  const reset = () => {
    setFirst_name("");
    setLast_name("");
    setBirthday("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="form">
        <h1 className="title">Add users</h1>
        <div className="gender">
          <img
            className="image-women"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmWX1oRC2J7bTUk4zZwgXT3uSo6bDxJY0gw&usqp=CAU"
            alt=""
          />
        </div>
        <form action="" onSubmit={usersSubmit}>
          <div className="user-form">
            <img className="image-icons" src={User} alt="" />

            <label htmlFor="firstName"></label>
            <input
              type="text"
              placeholder="Firts Name"
              id="firstName"
              onChange={(e) => setFirst_name(e.target.value)}
              value={first_name}
            />

            <label htmlFor="lastName"></label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              onChange={(e) => setLast_name(e.target.value)}
              value={last_name}
            />
          </div>
          <div className="user-form extend">
            <img className="image-icons" src={Cake} alt="" />
            <label htmlFor="birthday"></label>
            <input
              className="input-large"
              type="date"
              placeholder="Birthday"
              id="birthday"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
            />
          </div>
          <div className="user-form">
            <img className="image-icons" src={Email} alt="" />
            <label htmlFor="email"></label>
            <input
              className="input-large"
              type="email"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="user-form ">
            <img className="image-icons" src={Private} alt="" />
            <label htmlFor="password"></label>
            <input
              className="input-large"
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="user-form">
            <button className="button-24">Upload</button>
            {userSelected && (
              <button className="button-24" onClick={reset} type="button">
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default UsersForm;
