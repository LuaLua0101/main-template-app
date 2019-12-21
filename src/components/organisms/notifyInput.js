import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import useFormInput from "../../utils/useFormInput";
import { useSnackbar } from "notistack";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import moment from "moment";
import axios from "../../utils/axios";
import { dispatch, useGlobalState } from "../../Store";

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

const NotifyInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [notes, setNotes] = useState([""]);
  const [type, setType] = useState(0);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const title = useFormInput();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setType(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const create = () => {
    setLoading(true);
    axios
      .post("notify/add", {
        title: title.value,
        type: type,
        date: moment(selectedDate).format("YYYY/MM/DD"),
        details: notes
      })
      .then(res => {
        enqueueSnackbar("Thêm thông báo thành công!", { variant: "success" });
        title.setValue("");
        setType(0);
        setNotes([""]);
        dispatch({
          type: "add_notifies",
          notify: [
            {
              id: res.data.id,
              title: title.value,
              type: type,
              date: moment(selectedDate).format("YYYY/MM/DD")
            }
          ]
        });
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
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Thông báo dành cho
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type}
            onChange={handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value={0}>Giáo viên</MenuItem>
            <MenuItem value={1}>Phụ huynh</MenuItem>
          </Select>
        </FormControl>
        <TextField
          {...title}
          label="Tiêu đề thông báo"
          margin="normal"
          variant="outlined"
          className={classes.textField}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Ngày ra thông báo"
            format="dd/MM/yyyy"
            value={selectedDate}
            className={classes.textField}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {notes.map((i, index) => (
              <TextField
                value={i}
                onChange={e => {
                  let tmp = notes;
                  tmp[index] = e.target.value;
                  setNotes([...tmp]);
                }}
                label={"Nội dung mục thông báo số " + (index + 1)}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                multiline={true}
                rows={2}
                rowsMax={4}
              />
            ))}
          </Grid>
          <Grid item xs={12}>
            <Fab
              variant="extended"
              size="small"
              color="primary"
              onClick={() => {
                setNotes([...notes, ""]);
              }}
            >
              <AddCircleOutlineIcon className={classes.extendedIcon} />
              Thêm dòng
            </Fab>
          </Grid>
          <Grid item xs={12}>
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
              onClick={create}
            >
              <NavigationIcon className={classes.extendedIcon} />
              Xác nhận thêm thông báo
            </Fab>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default NotifyInput;
