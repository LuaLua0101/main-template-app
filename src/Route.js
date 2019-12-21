import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DynamicImport from "./utils/lazyImport";

const MainPage = DynamicImport(() => import("./components/pages/main"));
const ScheduledPage = DynamicImport(() =>
  import("./components/pages/scheduled")
);
const StudentsPage = DynamicImport(() => import("./components/pages/students"));
const TeachersPage = DynamicImport(() => import("./components/pages/teachers"));
const UsersPage = DynamicImport(() => import("./components/pages/users"));
const ChartPage = DynamicImport(() => import("./components/pages/chart"));
const LoginPage = DynamicImport(() => import("./components/pages/login"));
const NotFoundPage = DynamicImport(() => import("./components/pages/404"));
const NotifyPage = DynamicImport(() => import("./components/pages/notify"));
const TimekeepingPage = DynamicImport(() =>
  import("./components/pages/timeKeeping")
);
const TimekeepingStudentPage = DynamicImport(() =>
  import("./components/pages/timeKeepingStudent")
);
const NotifyManagementPage = DynamicImport(() =>
  import("./components/pages/notifyManagement")
);
const StudentDetailPage = DynamicImport(() =>
  import("./components/pages/studentDetail")
);
const TeacherDetailPage = DynamicImport(() =>
  import("./components/pages/teacherDetail")
);
const UserDetailPage = DynamicImport(() =>
  import("./components/pages/userDetail")
);
const DailyReportBookPage = DynamicImport(() =>
  import("./components/pages/dailyReportBook")
);
const SkillsPage = DynamicImport(() => import("./components/pages/skills"));
const SkillGroupsPage = DynamicImport(() =>
  import("./components/pages/skillGroups")
);
const SkillDetailPage = DynamicImport(() =>
  import("./components/pages/skillDetail")
);
const SkillGroupsDetailPage = DynamicImport(() =>
  import("./components/pages/skillGroupDetail")
);

const RouteMap = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/notify/:type" component={NotifyPage} />
      <Route exact path="/chart" component={ChartPage} />
      <Route exact path="/scheduled" component={ScheduledPage} />
      <Route exact path="/students" component={StudentsPage} />
      <Route exact path="/teachers" component={TeachersPage} />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/notifies" component={NotifyManagementPage} />
      <Route exact path="/time-keeping" component={TimekeepingPage} />
      <Route
        exact
        path="/time-keeping-student"
        component={TimekeepingStudentPage}
      />
      <Route exact path="/add-report" component={DailyReportBookPage} />
      <Route exact path="/student/:id" component={StudentDetailPage} />
      <Route exact path="/teacher/:id" component={TeacherDetailPage} />
      <Route exact path="/user/:id" component={UserDetailPage} />
      <Route exact path="/skills" component={SkillsPage} />
      <Route exact path="/skill-groups" component={SkillGroupsPage} />
      <Route exact path="/skill/:id" component={SkillDetailPage} />
      <Route exact path="/skill-group/:id" component={SkillGroupsDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default RouteMap;
