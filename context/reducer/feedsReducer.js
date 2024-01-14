import { SET_FEEDS } from "../../constants";

const feedsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FEEDS:
      return { ...state, feeds: action.payload };
    case "SET_FEEDS_NULL":
      return { ...state, feeds: null };
    default:
      return state;
  }
};

export default feedsReducer;
