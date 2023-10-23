import Types from "../types";

const iState = {
  type: "INITIAL_STATE",
};

const AppReducer = (state = iState, action) => {
  switch (action.type) {
    case Types.USER_DETAILS:
      return { userDetails: action.payload };
    default:
      return state;
  }
};

export default AppReducer;
