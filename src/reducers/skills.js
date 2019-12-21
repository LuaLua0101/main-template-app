const initState = [];
export default function companyReducer(state = initState, action) {
  switch (action.type) {
    case "init_skills":
      return [...action.skills];
    case "add_skills":
      return [...action.skills, ...state];
    case "del_skills":
      return state.filter((value, index, arr) => {
        return value.id !== action.id;
      });
    default:
      return state;
  }
}
