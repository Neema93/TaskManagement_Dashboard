const filtersRedusersDefaultState = {
    title: "",
    status: "Pending",
  };
  const filters = (state = filtersRedusersDefaultState, action) => {
    switch (action.type) {
      case "SET_TITLE_FILTER":
        return {
          ...state,
          title: action.title,
        };
      case "SET_STATUS_FILTER":
        return {
          ...state,
          status: action.status ,
        };
      default:
        return state;
    }
  };
  export default filters;