import React, { useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions/usersActions";
import { Link, useNavigate } from "react-router-dom";
// import EditUser from "../EditUser/EditUser";

const UserCard = ({ item, setEditModalOpen }) => {
  // const [editModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // console.log(editModalOpen);

  return (
    <>
      <Card sx={{ minWidth: 275, width: 300, m: 3 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="h5" component="div">
            {item.username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.email}
          </Typography>
          <Typography variant="body2">{item.phone}</Typography>
        </CardContent>
        <CardActions>
          <DeleteOutlinedIcon
            onClick={() => dispatch(deleteUser(item.id))}
            style={{ cursor: "pointer" }}
          />
          {/* <Link to={`/user/${item.id}`}> */}
          <MoreHorizIcon
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/user/${item.id}`)}
          />
          {/* </Link> */}
          <EditIcon
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/edit/${item.id}`)}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default UserCard;
