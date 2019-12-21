import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { dispatch, useGlobalState } from "../../Store";
import useFormInput from "../../utils/useFormInput";
import { useSnackbar } from "notistack";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "../../utils/axios";

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
  }
}));

const formatMoney = money => {
  return money
    ? money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : "";
};

const MoneyInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const noteContent = useFormInput();
  const fee = useFormInput();
  const [loading, setLoading] = useState(false);

  const handleClickVariant = variant => () => {
    setLoading(true);
    axios
      .post("transaction/add", {
        fee: parseInt(fee.value.replace(/,/g, "")),
        note: noteContent.value,
        type: props.in ? 0 : 1
      })
      .then(res => {
        enqueueSnackbar(
          props.in ? "Xác nhận thu thành công!" : "Xác nhận chi thành công!",
          { variant }
        );
        noteContent.setValue("");
        fee.setValue("");
        dispatch({
          type: "add_transactions",
          transactions: [
            {
              id: res.data.id,
              fee: parseInt(fee.value.replace(/,/g, "")),
              note: noteContent.value,
              type: props.in ? 0 : 1,
              created_at: res.data.created_at
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
        <Autocomplete
          freeSolo
          className={classes.textField}
          options={notes.map(option => option)}
          onChange={(e, value) => {
            noteContent.setValue(value);
          }}
          value={noteContent.value}
          renderInput={params => (
            <TextField
              {...noteContent}
              {...params}
              label="Ghi chú"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          )}
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
          onClick={handleClickVariant("success")}
        >
          <NavigationIcon className={classes.extendedIcon} />
          {props.in ? "Xác nhận thu" : "Xác nhận chi"}
        </Fab>
      </form>
    </>
  );
};

export default MoneyInput;
