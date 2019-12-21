import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useFormInput from "../../utils/useFormNumber";
import { useSnackbar } from "notistack";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
const notes = ["Đi chợ", "Mua linh tinh", "Lý do khác"];

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

const ScheduledInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [note, setNote] = useState([]);
  const fee = useFormInput("");
  const [value, setValue] = useState("female");
  const [date, setDate] = useState(0);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleChangeDate = event => {
    setDate(event.target.value);
  };

  const handleClickVariant = variant => () => {
    enqueueSnackbar("Xác nhận chi thành công!", { variant });
  };

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <RadioGroup name="gender1" value={value} onChange={handleChange} row>
          <FormControlLabel
            labelPlacement="start"
            label="Thu"
            value="female"
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="start"
            label="Chi"
            value="male"
            control={<Radio />}
          />
        </RadioGroup>
        <Autocomplete
          freeSolo
          className={classes.textField}
          options={note}
          {...fee}
          renderInput={params => (
            <TextField
              {...params}
              label="Số tiền"
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={e => {
                const value = parseInt(e.target.value.replace(/,/g, ""));
                fee.setValue(formatMoney(value));
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">VNĐ</InputAdornment>
                )
              }}
            />
          )}
        />
        <Autocomplete
          freeSolo
          className={classes.textField}
          options={notes.map(option => option)}
          renderInput={params => (
            <TextField
              {...params}
              label="Ghi chú"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Ngày lên lịch
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={date}
            onChange={handleChangeDate}
            labelWidth={labelWidth}
          >
            <MenuItem value={0}>Hàng ngày</MenuItem>
            <MenuItem value={1}>Đầu tháng</MenuItem>
            <MenuItem value={2}>Giữa tháng</MenuItem>
          </Select>
        </FormControl>
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
          onClick={handleClickVariant(props.in ? "success" : "warning")}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Xác nhận thêm
        </Fab>
      </form>
    </>
  );
};

export default ScheduledInput;
