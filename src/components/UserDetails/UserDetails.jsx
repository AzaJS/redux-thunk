import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneUser } from "../../store/actions/usersActions";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersReducer.user.data);
  useEffect(() => {
    dispatch(getOneUser(id));
  }, []);

  // console.log(user);

  console.log(user, "det");
  return (
    <div className="details">
      <div>{user.name}</div>{" "}
    </div>
  );
};

export default UserDetails;
