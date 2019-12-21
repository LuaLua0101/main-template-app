const initState = [];
export default function companyReducer(state = initState, action) {
  switch (action.type) {
    case "init_students":
      return [...action.students];
    case "add_students":
      return [...action.students, ...state];
    case "del_students":
      return state.filter((value, index, arr) => {
        return value.id !== action.id;
      });
    default:
      return state;
  }
}
