import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import { useSnackbar } from "notistack";
import DynamicImport from "../../utils/lazyImport";
import useFormInput from "../../utils/useFormInput";
import axios from "../../utils/axios";

const TypoGreenH5 = DynamicImport(() => import("../atoms/typoGreenH5"));
const TypoRedH5 = DynamicImport(() => import("../atoms/typoRedH5"));
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: "100%"
  },
  margin: {
    margin: "auto"
  }
}));

const Login = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const phone = useFormInput();
  const password = useFormInput();

  useEffect(() => {
    if (localStorage.getItem("@token")) window.location.replace("/");
  }, []);

  const login = () => {
    setLoading(true);
    axios
      .post("login", {
        phone: phone.value,
        password: password.value
      })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem("@token", res.data.token);
          enqueueSnackbar("Đăng nhập thành công!", { variant: "success" });
          window.location.replace("/");
        } else if (!res.data.success) {
          enqueueSnackbar("Đăng nhập thất bại, vui lòng thử lại ! ", {
            variant: "error"
          });
        }
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      )
      .finally(() => setLoading(false));
  };

  return (
    <div
      style={{
        height: window.innerHeight,
        backgroundImage: `url(${window.location.origin + "/login.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <TypoRedH5 text="Gia đình siêu nhân" />
      <TypoGreenH5 text="Đăng nhập" />

      <div style={{ padding: "50px 10px" }}>
        <TextField
          label="Số điện thoại"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...phone}
        />
        <TextField
          label="Mật khẩu đăng nhập"
          margin="normal"
          variant="outlined"
          type="password"
          autoComplete="current-password"
          className={classes.textField}
          {...password}
        />
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          className={classes.margin}
          style={{
            display: "flex",
            backgroundColor: "#44cbdf",
            backgroundImage:
              "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
            color: "#fbfefe",
            boxShadow: "none"
          }}
          onClick={login}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Đăng nhập
        </Fab>
      </div>
    </div>
  );
};

export default Login;
