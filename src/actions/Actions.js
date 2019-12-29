import axios from "axios";

export const getUser = () => dispatch => {
  let userData =
    window.localStorage.getItem("userList") !== null
      ? JSON.parse(window.localStorage.getItem("userList"))
      : [];
  dispatch({
    type: "ALL_USER_LIST",
    payload: userData
  });
};

export const createUser = payload => dispatch => {
  let userData =
    window.localStorage.getItem("userList") !== null
      ? JSON.parse(window.localStorage.getItem("userList"))
      : [];
  userData.push(payload);

  window.localStorage.setItem("userList", JSON.stringify(userData));

  dispatch(getUser(userData));
};

export const updateUser = (data, index) => dispatch => {
  let userData =
    window.localStorage.getItem("userList") !== null
      ? JSON.parse(window.localStorage.getItem("userList"))
      : [];
  userData[index].name = data.name ? data.name : "";
  userData[index].dob = data.dob ? data.dob : "";
  userData[index].city = data.city ? data.city : "";
  userData[index].phone = data.phone ? data.phone : "";

  window.localStorage.setItem("userList", JSON.stringify(userData));

  dispatch(getUser(userData));
};
export const deleteUser = id => dispatch => {
  let userData =
    window.localStorage.getItem("userList") !== null
      ? JSON.parse(window.localStorage.getItem("userList"))
      : [];
  userData.splice(id, 1);

  window.localStorage.setItem("userList", JSON.stringify(userData));

  dispatch(getUser(userData));
};
