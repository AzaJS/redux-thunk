import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddUser from "../AddUser/AddUser";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="header">
      <div
        className="header-nav"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Link to={`/`}>
          <Button style={{ textDecoration: "none" }} variant="contained">
            Users List
          </Button>
        </Link>
        {/* <Link> */}
        <Button onClick={() => setIsModalOpen(true)} variant="contained">
          Add User
        </Button>
        <AddUser isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        {/* </Link> */}
        {/* <div
          className="list"
          style={{ border: "1px solid black", cursor: "pointer" }}
        >
          Users List
        </div>
        <div
          className="add"
          style={{ border: "1px solid black", cursor: "pointer" }}
        >
          Add user
        </div> */}
      </div>
    </div>
  );
};

export default Header;
