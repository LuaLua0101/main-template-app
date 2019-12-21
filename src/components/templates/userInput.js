import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import useFormInput from "../../utils/useFormInput";
import { useSnackbar } from "notistack";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "../../utils/axios";
import { dispatch, useGlobalState } from "../../Store";
import moment from "moment";
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  margin: {
    margin: "auto"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  close: {
    padding: theme.spacing(0.5)
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

const formatMoney = money => {
  return money
    ? money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : "";
};

const UserInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const salary = useFormInput();
  const facebook = useFormInput();
  const phone = useFormInput();
  const address = useFormInput();
  const email = useFormInput();
  const name = useFormInput();
  const studentId = useFormInput();
  const studentName = useFormInput();
  const [gender, setGender] = useState(1);
  const [ID, setID] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.update) {
      setLoading(true);
      axios
        .post("user/detail", { id: parseInt(props.match.params.id) })
        .then(res => {
          console.log(res.data);
          const { user, student } = res.data;
          setGender(user.gender);
          setID(user.id);
          studentId.setValue(student.sub_id);
          studentName.setValue(student.name);
          email.setValue(user.email);
          facebook.setValue(user.facebook);
          salary.setValue(formatMoney(user.salary));
          address.setValue(user.address);
          setSelectedDate(new Date(user.dob));
          setStartDate(new Date(user.start_date));
          name.setValue(user.name);
          phone.setValue(user.phone);
        })
        .catch(err =>
          enqueueSnackbar(err.message, {
            variant: "error"
          })
        )
        .finally(() => setLoading(false));
    }
  }, []);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleChangeGender = event => {
    setGender(parseInt(event.target.value));
  };

  const clear = () => {
    salary.setValue("");
    email.setValue("");
    facebook.setValue("");
    address.setValue("");
    name.setValue("");
    address.setValue("");
    phone.setValue("");
  };

  const adduser = () => {
    setLoading(true);
    axios
      .post(props.update ? "user/update" : "user/add", {
        id: props.update ? ID : null,
        name: name.value,
        email: email.value,
        phone: phone.value,
        facebook: facebook.value,
        salary: salary.value ? parseInt(salary.value.replace(/,/g, "")) : 0,
        gender,
        dob: moment(selectedDate).format("YYYY/MM/DD"),
        start_date: moment(startDate).format("YYYY/MM/DD"),
        address: address.value
      })
      .then(res => {
        if (!props.update) {
          dispatch({
            type: "add_users",
            users: [
              {
                id: res.data.id,
                name: name.value,
                dob: moment(selectedDate).format("YYYY/MM/DD")
              }
            ]
          });
          clear();
        }
        enqueueSnackbar(
          props.update
            ? "Xác nhận cập nhật thành công!"
            : "Xác nhận thêm thành công!",
          { variant: "success" }
        );
        props.update && props.history.push("/users");
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <RadioGroup value={gender} onChange={handleChangeGender} row>
          <FormControlLabel
            labelPlacement="start"
            label="Nam"
            value={1}
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="start"
            label="Nữ"
            value={0}
            control={<Radio />}
          />
        </RadioGroup>
        <TextField
          label="Họ tên phụ huynh"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...name}
        />

        <TextField
          label="Số điện thoại"
          margin="normal"
          type="number"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(+84) </InputAdornment>
            )
          }}
          className={classes.textField}
          {...phone}
        />
        <TextField
          label="Facebook cá nhân"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...facebook}
        />
        {props.update && (
          <>
            <TextField
              label="Mã số trẻ"
              margin="normal"
              variant="outlined"
              className={classes.textField}
              {...studentId}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              label="Họ tên trẻ"
              margin="normal"
              variant="outlined"
              className={classes.textField}
              {...studentName}
              InputProps={{
                readOnly: true
              }}
            />
          </>
        )}
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          className={classes.margin}
          style={{
            backgroundColor: "#44cbdf",
            backgroundImage:
              "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
            color: "#fbfefe",
            boxShadow: "none"
          }}
          onClick={adduser}
        >
          <NavigationIcon className={classes.extendedIcon} />
          {props.update ? "Sửa thông tin" : "Thêm phụ huynh"}
        </Fab>
      </form>
    </>
  );
};

export default withRouter(UserInput);
