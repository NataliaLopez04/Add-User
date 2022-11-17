import React from "react";
import imageDelete from "../assets/button-delete.png";
import imageEdit from "../assets/button-edit.png";
import Cake from "../assets/birthday_cake.png";

const UsersList = ({ usersList, deleteUser, selectUser }) => {
  return (
    <div className="list">
      <ul>
        {usersList?.map((user) => (
          <li key={user.id}>
            <h1>
              <b>
                {user.first_name} {user.last_name}
              </b>
            </h1>
            <h4> {user.email}</h4>
            <h5>
              <b>Password:</b>
              {user.password}
            </h5>

            <h4>
              <img className="image-icons" src={Cake} alt="" /> {user.birthday}
            </h4>
            <div className="buttons">
              <button
                className="button-delete"
                onClick={() => deleteUser(user.id)}
              >
                <img className="image-delete" src={imageDelete} alt="" />
              </button>

              <button className="button-edit" onClick={() => selectUser(user)}>
                <img className="image-edit" src={imageEdit} alt="" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
