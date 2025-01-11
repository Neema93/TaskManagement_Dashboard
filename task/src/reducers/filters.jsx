const filtersRedusersDefaultState = {
    title: "",
    status: "Pending",
  };
  export default (state = filtersRedusersDefaultState, action) => {
    switch (action.type) {
      case "SET_TITLE_FILTER":
        return {
          ...state,
          title: action.title,
        };
      case "SORT_BY_STATUS":
        return {
          ...state,
          status: action.status ,
        };
      default:
        return state;
    }
  };