import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Modal, TextField } from "@mui/material";
import { createUser } from "../../store/actions/usersActions";

const AddUser = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  // console.log(newUser.name);
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = () => {
    dispatch(createUser(newUser));
    setIsModalOpen(false);
    setNewUser({
      name: "",
      username: "",
      email: "",
      phone: "",
    });
  };

  // function handleCreate(data) {
  //   setNewUser({ ...newUser, name: data });
  // }
  console.log(newUser, "newuser");

  // const handleCreate = function (e) {
  //   setNewUser({ name: e.target.value });
  //   console.log(newUser, "new");
  // };

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          value={newUser.name}
          id="name"
          label="Name"
          variant="standard"
        />
        <TextField
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          id="username"
          label="Username"
          variant="standard"
        />
        <TextField
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          id="email"
          label="email"
          variant="standard"
        />
        <TextField
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          id="phone"
          label="Phone"
          variant="standard"
        />
        <div>
          <Button onClick={handleSubmit} variant="contained">
            Add
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddUser;
