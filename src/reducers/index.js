import { combineReducers } from "redux";
import transactions from "./transactions";
import notifies from "./notifies";
import students from "./students";
import teachers from "./teachers";
import users from "./users";
import timekeeping from "./timekeeping";
import skillGroups from "./skillGroups";
import skills from "./skills";

const reducer = combineReducers({
  transactions: transactions,
  notifies: notifies,
  students: students,
  teachers: teachers,
  users: users,
  timekeeping: timekeeping,
  skillGroups: skillGroups,
  skills: skills
});

export default reducer;
