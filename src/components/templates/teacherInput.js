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
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
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

const TeacherInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const salary = useFormInput();
  const facebook = useFormInput();
  const phone = useFormInput();
  const address = useFormInput();
  const email = useFormInput();
  const name = useFormInput();
  const [gender, setGender] = useState(1);
  const [ID, setID] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.update) {
      setLoading(true);
      axios
        .post("teacher/detail", { id: parseInt(props.match.params.id) })
        .then(res => {
          console.log(res.data);
          const { teacher } = res.data;
          setGender(teacher.gender);
          setID(teacher.id);
          email.setValue(teacher.email);
          facebook.setValue(teacher.facebook);
          salary.setValue(formatMoney(teacher.salary));
          address.setValue(teacher.address);
          setSelectedDate(new Date(teacher.dob));
          setStartDate(new Date(teacher.start_date));
          name.setValue(teacher.name);
          phone.setValue(teacher.phone);
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

  const addTeacher = () => {
    setLoading(true);
    axios
      .post(props.update ? "teacher/update" : "teacher/add", {
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
            type: "add_teachers",
            teachers: [
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
        props.update && props.history.push("/teachers");
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
          label="Họ tên giáo viên"
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
          label="Email giáo viên"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...email}
        />
        <TextField
          label="Địa chỉ giáo viên"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...address}
        />
        <TextField
          label="Facebook cá nhân"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...facebook}
        />
        <TextField
          className={classes.textField}
          value={salary.value}
          label="Số tiền"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={e => {
            let v = e.target.value;
            if (isNaN(v.replace(/,/g, ""))) {
              v = v.substring(0, v.length - 1);
            }
            const value = parseInt(v.replace(/,/g, ""));
            salary.setValue(formatMoney(value));
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">VNĐ</InputAdornment>
            )
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Ngày sinh"
            format="dd/MM/yyyy"
            value={selectedDate}
            className={classes.textField}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Ngày vào làm"
            format="dd/MM/yyyy"
            value={startDate}
            className={classes.textField}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
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
          onClick={addTeacher}
        >
          <NavigationIcon className={classes.extendedIcon} />
          {props.update ? "Sửa thông tin" : "Thêm giáo viên"}
        </Fab>
      </form>
    </>
  );
};

export default withRouter(TeacherInput);
