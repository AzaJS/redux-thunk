import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/actions/usersActions";
import EditUser from "../EditUser/EditUser";
import UserCard from "../UserCard/UserCard";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((store) => store.usersReducer.users);

  const [editModalOpen, setEditModalOpen] = useState(false);

  console.log(users, "users");

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // console.log(users)
  return (
    <div
      className="cards"
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {users ? (
        users.map((item) => (
          <UserCard
            key={item.id}
            item={item}
            editModalOpen={editModalOpen}
            setEditModalOpen={setEditModalOpen}
          />
        ))
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

export default Users;
