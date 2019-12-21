import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSnackbar } from "notistack";
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

const ReportInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  const handleClickVariant = variant => () => {
    enqueueSnackbar("Xác nhận thêm thông tin thành công!", { variant });
  };

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <Autocomplete
          freeSolo
          className={classes.textField}
          options={notes.map(option => option)}
          renderInput={params => (
            <TextField
              {...params}
              label="Chọn học sinh"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <TextField
          label="Ghi chú thông tin"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          multiline={true}
          rows={2}
          rowsMax={4}
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
          onClick={handleClickVariant(props.in ? "success" : "warning")}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Thêm thông tin
        </Fab>
      </form>
    </>
  );
};

export default ReportInput;
