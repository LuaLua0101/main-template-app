const initState = [];
export default function companyReducer(state = initState, action) {
  switch (action.type) {
    case "init_users":
      return [...action.users];
    case "add_users":
      return [...action.users, ...state];
    case "del_users":
      return state.filter((value, index, arr) => {
        return value.id !== action.id;
      });
    default:
      return state;
  }
}
