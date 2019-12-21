const initState = [];
export default function companyReducer(state = initState, action) {
  switch (action.type) {
    case "init_teachers":
      return [...action.teachers];
    case "add_teachers":
      return [...action.teachers, ...state];
    case "del_teachers":
      return state.filter((value, index, arr) => {
        return value.id !== action.id;
      });
    default:
      return state;
  }
}
