const initState = [];
export default function companyReducer(state = initState, action) {
  switch (action.type) {
    case "init_skill_groups":
      return [...action.skill_groups];
    case "add_skill_groups":
      return [...action.skill_groups, ...state];
    case "del_skill_groups":
      return state.filter((value, index, arr) => {
        return value.id !== action.id;
      });
    default:
      return state;
  }
}
