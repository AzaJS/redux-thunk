import axios from "axios";
import { API } from "../../helpers/const";
import {
  setUserError,
  setUserLoading,
  setUsers,
  setUserSuccess,
} from "../reducers/usersReducer";

export const getUsers = () => {
  console.log("getu");
  return async (dispatch) => {
    try {
      const { data } = await axios.get(API);
      dispatch(setUsers(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getOneUser = (id) => {
  return async (dispatch) => {
    dispatch(setUserLoading());
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch(setUserSuccess(data));
    } catch (error) {
      console.log(error.message);
      dispatch(setUserError(error.message));
    }
  };
};

export const updateUser = (id, editedUser) => {
  console.log(editedUser, "act");
  console.log(id, "id");
  return async (dispatch) => {
    await axios.patch(`${API}/${id}`, editedUser);
    dispatch(getUsers());
  };
};

// export const getOneUser = (id) => {
//   // console.log("getone");
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`${API}/${id}`);
//       console.log(data, "data");
//       dispatch(setOneUser(data));
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const deleteUser = (id) => {
  return async (dispatch) => {
    await axios.delete(`${API}/${id}`);
    dispatch(getUsers());
  };
};

export const createUser = (newUser) => {
  return async (dispatch) => {
    await axios.post(API, newUser);
    dispatch(getUsers());
  };
};
