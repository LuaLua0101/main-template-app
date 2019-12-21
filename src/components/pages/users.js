import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import DynamicImport from "../../utils/lazyImport";

const UserList = DynamicImport(() => import("../templates/userList"));
const TypoGreenH5 = DynamicImport(() => import("../atoms/typoGreenH5"));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const UsersPage = () => {
  return (
    <>
      <TypoGreenH5 text="Danh sách phụ huynh" />
      <UserList />
    </>
  );
};

export default UsersPage;
