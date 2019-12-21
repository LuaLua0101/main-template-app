const initState = [];
export default function companyReducer(state = initState, action) {
  switch (action.type) {
    case "init_notifies":
      return [...action.notify];
    case "add_notifies":
      return [...action.notify, ...state];
    case "del_notify":
      return state.filter((value, index, arr) => {
        return value.id !== action.id;
      });
    default:
      return state;
  }
}
