import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Fab from "@material-ui/core/Fab";
import DynamicImport from "../../utils/lazyImport";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../../utils/axios";
import { useSnackbar } from "notistack";
import moment from "moment";

const History = DynamicImport(() => import("../organisms/dateHistory"));

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function DayChart() {
  const classes = useStyles();
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [transactions, setTransactions] = useState();
  const [loading, setLoading] = useState(false);
  const [countIncome, setCountIncome] = useState(0);
  const [countOutcome, setCountOutcome] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const handleDateFrom = date => {
    setFrom(date);
  };

  const handleDateTo = date => {
    setTo(date);
  };

  const getHistories = () => {
    setLoading(true);
    axios
      .post("transaction/histories", {
        from: moment(from).format("YYYY/MM/DD"),
        to: moment(to).format("YYYY/MM/DD")
      })
      .then(res => {
        setTransactions(res.data);
        count(res.data);
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const count = _transactions => {
    let income = 0;
    let outcome = 0;
    if (_transactions) {
      Object.keys(_transactions).forEach(i => {
        _transactions[i].forEach(row => {
          if (row.type === 0) income += row.fee;
          else if (row.type === 1) outcome += row.fee;
        });
      });
    }
    setCountIncome(income.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
    setCountOutcome(
      outcome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Ngày bắt đầu"
          format="MM/dd/yyyy"
          value={from}
          onChange={handleDateFrom}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Ngày kết thúc"
          format="MM/dd/yyyy"
          value={to}
          onChange={handleDateTo}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#44cbdf",
          backgroundImage: "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
          color: "#fbfefe",
          boxShadow: "none"
        }}
        onClick={getHistories}
      >
        <SearchIcon /> Xem lịch sử
      </Fab>
      {transactions &&
        Object.keys(transactions).map(i => (
          <History title={i} data={transactions[i]} />
        ))}
      <Paper
        className={classes.root}
        style={{
          backgroundColor: "#44cbdf",
          backgroundImage: "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
          color: "#fbfefe",
          boxShadow: "none",
          borderRadius: 0
        }}
      >
        <Typography variant="h5" component="h3">
          Tổng thu nhập
        </Typography>
        <Typography component="p">{countIncome} vnđ</Typography>
      </Paper>
      <Paper
        className={classes.root}
        style={{
          backgroundColor: "#fbfefe",
          backgroundImage:
            "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
          color: "#fbfefe",
          boxShadow: "none",
          borderRadius: 0
        }}
      >
        <Typography variant="h5" component="h3">
          Tổng chi tiêu
        </Typography>
        <Typography component="p">{countOutcome} vnđ</Typography>
      </Paper>
    </MuiPickersUtilsProvider>
  );
}
