const initState = [];
export default function companyReducer(state = initState, action) {
  switch (action.type) {
    case "init_transactions":
      return [...action.transactions];
    case "add_transactions":
      return [...action.transactions, ...state];
    case "del_transactions":
      return state.filter((value, index, arr) => {
        return value.id !== action.id;
      });
    default:
      return state;
  }
}
