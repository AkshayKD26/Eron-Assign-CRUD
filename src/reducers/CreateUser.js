  
const initialState = {};

export default function CreateUser(state = initialState, action) {
  switch (action.type) {
    case "ALL_USER_LIST":
      return action.payload;
    default:
      return state;
  }
}