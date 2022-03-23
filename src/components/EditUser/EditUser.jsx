import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser, updateUser } from "../../store/actions/usersActions";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  // const {user} = useSelector(state => state.usersReducer)
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser(id));
  }, [id]);

  const user = useSelector((state) => state.usersReducer.user.data);

  const [editedUser, setEditedUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    if (user) {
      setEditedUser(user);
    }
  }, [user]);

  const style = {
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  function handleUpdate(editedUser) {
    console.log(id, editedUser);
    dispatch(updateUser(id, editedUser));
    navigate("/");
  }

  console.log(user, "user");

  // console.log(editedUser.name);

  return (
    <>
      {id == user.id ? (
        <Box sx={style}>
          <TextField
            value={editedUser.name}
            // onChange={(e) => console.log(e.target.value)}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
            id="name"
            placeholder="Name"
            variant="standard"
          />
          <TextField
            value={editedUser.username}
            onChange={(e) =>
              setEditedUser({ ...editedUser, username: e.target.value })
            }
            id="username"
            placeholder="Username"
            variant="standard"
          />
          <TextField
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({ ...editedUser, email: e.target.value })
            }
            id="email"
            placeholder="email"
            variant="standard"
          />
          <TextField
            value={editedUser.phone}
            onChange={(e) =>
              setEditedUser({ ...editedUser, phone: e.target.value })
            }
            id="phone"
            placeholder="Phone"
            variant="standard"
          />
          <div>
            <Button
              variant="contained"
              onClick={() => handleUpdate(editedUser)}
            >
              Edit
            </Button>
          </div>
        </Box>
      ) : null}
    </>
  );
};

export default EditUser;
