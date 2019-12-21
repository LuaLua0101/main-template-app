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
import { dispatch } from "../../Store";
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

const StudentInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const subId = useFormInput();
  const fee = useFormInput();
  const alias = useFormInput();
  const mName = useFormInput();
  const fName = useFormInput();
  const mPhone = useFormInput();
  const fPhone = useFormInput();
  const mFB = useFormInput();
  const fFB = useFormInput();
  const address = useFormInput();
  const note = useFormInput();
  const name = useFormInput();
  const [gender, setGender] = useState(1);
  const [ID, setID] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.update) {
      setLoading(true);
      axios
        .post("student/detail", { id: parseInt(props.match.params.id) })
        .then(res => {
          console.log(res.data);
          const { student, mom, dad } = res.data;
          setGender(student.gender);
          setID(student.id);
          subId.setValue(student.sub_id);
          fee.setValue(formatMoney(student.fee));
          alias.setValue(student.alias);
          address.setValue(student.address);
          setSelectedDate(new Date(student.dob));
          if (mom) {
            mName.setValue(mom.name);
            mFB.setValue(mom.facebook);
            mPhone.setValue(mom.phone);
          }
          if (dad) {
            fPhone.setValue(dad.phone);
            fName.setValue(dad.name);
            fFB.setValue(dad.facebook);
          }
          note.setValue(student.note);
          name.setValue(student.name);
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

  const handleChangeGender = event => {
    setGender(parseInt(event.target.value));
  };

  const clear = () => {
    subId.setValue("");
    fee.setValue("");
    alias.setValue("");
    mName.setValue("");
    fName.setValue("");
    mPhone.setValue("");
    fPhone.setValue("");
    mFB.setValue("");
    fFB.setValue("");
    address.setValue("");
    note.setValue("");
    name.setValue("");
    address.setValue("");
  };

  const addStudent = () => {
    setLoading(true);
    axios
      .post(props.update ? "student/update" : "student/add", {
        id: props.update ? ID : null,
        sub_id: subId.value,
        name: name.value,
        alias: alias.value,
        fee: fee.value ? parseInt(fee.value.replace(/,/g, "")) : 0,
        note: note.value,
        gender,
        dob: moment(selectedDate).format("YYYY/MM/DD"),
        mName: mName.value,
        mPhone: mPhone.value,
        mFB: mFB.value,
        fName: fName.value,
        fPhone: fPhone.value,
        fFB: fFB.value,
        address: address.value
      })
      .then(res => {
        if (!props.update) {
          dispatch({
            type: "add_students",
            students: [
              {
                id: res.data.id,
                created_at: res.data.created_at
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
        props.update && props.history.push("/students");
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
          type="number"
          label="Mã số học sinh"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...subId}
        />
        <TextField
          label="Họ tên học sinh"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...name}
        />
        <TextField
          label="Biệt danh học sinh"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...alias}
        />
        <TextField
          label="Họ tên mẹ"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...mName}
        />
        <TextField
          label="Số điện thoại Mẹ"
          margin="normal"
          type="number"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(+84) </InputAdornment>
            )
          }}
          className={classes.textField}
          {...mPhone}
        />
        <TextField
          label="Facebook cá nhân mẹ"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...mFB}
        />
        <TextField
          label="Họ tên bố"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...fName}
        />
        <TextField
          label="Số điện thoại Bố"
          margin="normal"
          type="number"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(+84) </InputAdornment>
            )
          }}
          className={classes.textField}
          {...fPhone}
        />
        <TextField
          label="Facebook cá nhân bố"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...fFB}
        />
        <TextField
          label="Địa chỉ liên hệ"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...address}
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
        <TextField
          className={classes.textField}
          value={fee.value}
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
            fee.setValue(formatMoney(value));
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">VNĐ</InputAdornment>
            )
          }}
        />
        {/* <div className={classes.textField}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Tính cách của trẻ</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleSelect("checkedA")}
                    value="checkedA"
                  />
                }
                label="Trầm lặng"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleSelect("checkedB")}
                    value="checkedB"
                  />
                }
                label="Kiên nhẫn"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleSelect("checkedC")}
                    value="checkedC"
                  />
                }
                label="Dễ nản chí"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleSelect("checkedD")}
                    value="checkedD"
                  />
                }
                label="Lăng xăng"
              />
              <FormControlLabel
                control={
                  <TextField
                    label="Khác (nếu có)"
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className={classes.textField}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Trẻ đi học</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleSelect("checkedA")}
                    value="checkedA"
                  />
                }
                label="Nhà trẻ"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleSelect("checkedB")}
                    value="checkedB"
                  />
                }
                label="Tiểu học"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleSelect("checkedC")}
                    value="checkedC"
                  />
                }
                label="Trung tâm chuyên biệt"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleSelect("checkedD")}
                    value="checkedD"
                  />
                }
                label="Ở nhà"
              />
              <FormControlLabel
                control={
                  <TextField
                    style={{ size: 15 }}
                    label="Khác (nếu có)"
                    margin="normal"
                    variant="outlined"
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
        <TextField
          label="Ba mẹ chia sẻ tình trạng cụ thể của con và những điểm lưu ý mà ba mẹ lo lắng?"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          multiline={true}
          rows={2}
          rowsMax={4}
        />
        <TextField
          label="Ba mẹ hãy chia sẻ những việc con làm được? Chưa làm được? Mong muốn của ba mẹ?"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          multiline={true}
          rows={2}
          rowsMax={4}
        />
        <TextField
          label="Ba mẹ có yêu cầu, mong muốn đăng ký học khung giờ nào trong ngày?"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          multiline={true}
          rows={2}
          rowsMax={4}
        /> */}
        <TextField
          label="Ghi chú của cô"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          multiline={true}
          rows={2}
          rowsMax={4}
          {...note}
        />
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
          onClick={addStudent}
        >
          <NavigationIcon className={classes.extendedIcon} />
          {props.update ? "Xác nhận sửa" : "Xác nhận thêm"}
        </Fab>
      </form>
    </>
  );
};

export default withRouter(StudentInput);
