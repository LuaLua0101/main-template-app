const initState = [];
export default function companyReducer(state = initState, action) {
  switch (action.type) {
    case "init_timekeeping":
      return [...action.timekeeping];
    case "add_timekeeping":
      const newState = state.map(obj =>
        obj.id === action.id ? { ...obj, checkin: action.checkin } : obj
      );
      return newState;
    case "del_timekeeping":
      const _newState = state.map(obj =>
        obj.id === action.id ? { ...obj, checkin: null } : obj
      );
      return [..._newState];
    case "edit_timekeeping":
      const __newState = state.map(obj =>
        obj.checkin && obj.checkin.tid === action.id
          ? {
              ...obj,
              checkin: {
                ...obj.checkin,
                checkin: action.checkin,
                checkout: action.checkout
              }
            }
          : obj
      );
      return [...__newState];
    default:
      return state;
  }
}
