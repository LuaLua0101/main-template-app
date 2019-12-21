import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import axios from "../../utils/axios";
import moment from "moment";
import "moment/locale/vi";
import { dispatch, useGlobalState } from "../../Store";
import { useSnackbar } from "notistack";

moment.lang("vi");
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflow: "auto"
  }
});

const formatMoney = money => {
  return money
    ? money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : "";
};

export default function MoneyHistory() {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [delID, setDelID] = useState();
  const [loading, setLoading] = useState(false);
  const [transactions] = useGlobalState("transactions");

  useEffect(() => {
    setLoading(true);
    axios
      .get("transaction/list")
      .then(res => {
        dispatch({
          type: "init_transactions",
          transactions: res.data
        });
      })
      .catch()
      .finally(() => setLoading(false));
  }, []);

  const handleClickOpen = id => {
    setDelID(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    axios
      .post("transaction/delete", {
        id: delID
      })
      .then(res => {
        if (res.data === 200) {
          dispatch({
            type: "del_transactions",
            id: delID
          });
          enqueueSnackbar("Xác nhận đã xóa", { variant: "success" });
        }
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      )
      .finally(() => setOpen(false));
  };

  const renderType = type => {
    return (
      <Chip
        label={type === 0 ? "Thu" : "Chi"}
        size="small"
        color={type === 0 ? "primary" : "secondary"}
      />
    );
  };

  return (
    <>
      <Table className={classes.table} aria-label="simple table">
        <TableHead
          style={{
            backgroundColor: "#44cbdf",
            backgroundImage:
              "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
            color: "#fbfefe",
            boxShadow: "none",
            borderRadius: 0
          }}
        >
          <TableRow>
            <TableCell>Loại</TableCell>
            <TableCell>Số tiền</TableCell>
            <TableCell>Thời gian</TableCell>
            <TableCell>Xóa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(row => (
            <TableRow>
              <TableCell>{renderType(row.type)}</TableCell>
              <TableCell>{formatMoney(row.fee)}</TableCell>
              <TableCell>
                {moment(row.created_at, "YYYYMMDD hhmmss").fromNow()}
              </TableCell>
              <TableCell>
                <DeleteIcon
                  style={{
                    color: "black",
                    cursor: "pointer",
                    fontSize: 30
                  }}
                  onClick={() => handleClickOpen(row.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Xác nhận xóa ?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy, không xóa
          </Button>
          <Button onClick={handleOk} color="primary">
            Xóa luôn
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
