import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from "react-vis";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import axios from "../../utils/axios";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MonthChart = props => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mon, setMon] = React.useState(null);
  const [transactions, setTransactions] = useState();
  const [countIncome, setCountIncome] = useState(0);
  const [countOutcome, setCountOutcome] = useState(0);
  const [days, setDays] = useState(0);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  const getHistories = (from, to) => {
    setLoading(true);
    axios
      .post("transaction/histories", {
        from,
        to
      })
      .then(res => {
        console.log(res.data);
        setTransactions(res.data);
        count(res.data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const getChart = i => {
    setMon(i);
    handleClose();
    //get current year
    const year = moment().year();
    //get total days
    setDays(moment(year + "-" + i, "YYYY-MM").daysInMonth());
    const from = moment(year + "/" + i + "/1").format("YYYY/MM/DD");
    const to = moment(year + "/" + i + "/" + days).format("YYYY/MM/DD");
    getHistories(from, to);
  };

  return loading ? (
    "loading"
  ) : (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          width: "100%",
          borderRadius: 0,
          color: "#fbfefe",
          backgroundColor: "#44cbdf",
          backgroundImage: "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)"
        }}
      >
        {mon ? "Tháng " + mon : "Chọn tháng cần xem báo cáo"}
      </Button>
      <br />
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {months.map(i => (
          <MenuItem key={i} onClick={() => getChart(i)}>
            Tháng {i}
          </MenuItem>
        ))}
      </StyledMenu>
      <br />
      <EqualizerIcon style={{ color: "#12939a" }} /> Tiền thu
      <EqualizerIcon style={{ color: "#79c7e3" }} /> Tiền chi
      {mon && (
        <>
          <div
            style={{
              overflow: "auto",
              marginBottom: 5
            }}
          >
            <XYPlot
              margin={{ bottom: 70 }}
              xType="ordinal"
              width={1200}
              height={500}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis tickLabelAngle={-45} />
              <YAxis />
              <VerticalBarSeries data={[{ x: "1/10", y: 10 }]} />
              <VerticalBarSeries data={[{ x: "1/10", y: 2 }]} />
            </XYPlot>
          </div>
          <Paper
            className={classes.root}
            style={{
              backgroundColor: "#44cbdf",
              backgroundImage:
                "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
              color: "#fbfefe",
              boxShadow: "none",
              borderRadius: 0
            }}
          >
            <Typography variant="h5" component="h3">
              Tổng thu nhập tháng {mon}
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
              Tổng chi tiêu tháng {mon}
            </Typography>
            <Typography component="p">{countOutcome} vnđ</Typography>
          </Paper>
        </>
      )}
    </>
  );
};

export default MonthChart;
