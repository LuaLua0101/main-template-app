import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { withRouter } from "react-router";
import axios from "../../utils/axios";
import { dispatch, useGlobalState } from "../../Store";
import moment from "moment";
import { useSnackbar } from "notistack";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventBusyIcon from "@material-ui/icons/EventBusy";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TimeKeepingStudentDetail = props => {
  const [open, setOpen] = useState(false);
  const [tID, setTID] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timekeeping] = useGlobalState("timekeeping");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .post("student/time-keeping", {
        id: parseInt(props.match.params.id)
      })
      .then(res => {
        console.log(res.data);
        setData(res.data);
        dispatch({
          type: "init_timekeeping",
          timekeeping: res.data.list
        });
      })
      .catch()
      .finally(() => setLoading(false));
  }, []);

  const edit = (id, checkin, checkout) => {
    setTID({
      id,
      checkin,
      checkout
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addCheckin = (id, date) => {
    axios
      .post("student/add-checkin", {
        id,
        date
      })
      .then(res => {
        console.log(res.data.checkin);
        dispatch({
          type: "add_timekeeping",
          id,
          checkin: {
            tid: res.data.checkin.id,
            ...res.data.checkin
          }
        });
        enqueueSnackbar("Xác nhận đã điểm danh", { variant: "success" });
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      )
      .finally(() => setOpen(false));
  };

  const removeCheckin = (id, tid) => {
    axios
      .post("student/remove-checkin", {
        id: tid
      })
      .then(res => {
        if (res.data === 200) {
          dispatch({
            type: "del_timekeeping",
            id
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

  const handleOk = () => {
    axios
      .post("student/update-checkin", {
        id: tID.id,
        checkin: tID.checkin,
        checkout: tID.checkout
      })
      .then(res => {
        dispatch({
          type: "edit_timekeeping",
          id: tID.id,
          checkin: tID.checkin,
          checkout: tID.checkout
        });
        enqueueSnackbar("Xác nhận thay đổi", { variant: "success" });
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      )
      .finally(() => setOpen(false));
  };

  return (
    <>
      <Table>
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
            <TableCell>Ngày</TableCell>
            <TableCell>In/Out</TableCell>
            {/* <TableCell>Điểm danh</TableCell>
            <TableCell>Điều chỉnh thời gian</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.list &&
            data.list.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {row && (
                    <Chip
                      label={moment(row.date).format("DD/MM")}
                      variant="outlined"
                    />
                  )}
                </TableCell>
                <TableCell>
                  {row && row.checkin ? (
                    <Chip
                      label={row.checkin + " - " + row.checkout}
                      size="small"
                      color="primary"
                    />
                  ) : (
                    <Chip
                      label="chưa điểm danh"
                      size="small"
                      color="secondary"
                    />
                  )}
                </TableCell>
                {/* <TableCell>
                  {row && row.checkin ? (
                    <EventBusyIcon
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontSize: 30
                      }}
                      onClick={() =>
                        removeCheckin(props.match.params.id, row.id)
                      }
                    />
                  ) : (
                    <EventAvailableIcon
                      style={{
                        color: "#3fb488",
                        cursor: "pointer",
                        fontSize: 30
                      }}
                      onClick={() =>
                        addCheckin(props.match.params.id, row.date)
                      }
                    />
                  )}
                </TableCell>
                <TableCell>
                  {row && row.checkin && (
                    <PlaylistAddIcon
                      style={{
                        color: "#285083",
                        cursor: "pointer",
                        fontSize: 30
                      }}
                      onClick={() => edit(row.id, row.checkin, row.checkout)}
                    />
                  )}
                </TableCell> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {tID && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Thay đổi giờ vào/ra
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <TextField
                  label="Thời gian checkin"
                  margin="normal"
                  type="number"
                  variant="outlined"
                  value={tID.checkin.split(":")[0]}
                  onChange={e => {
                    const value = parseInt(e.target.value);
                    if (value >= 0 && value < 25) {
                      setTID({
                        ...tID,
                        checkin: value + ":" + tID.checkin.split(":")[1]
                      });
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Giờ </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  margin="normal"
                  type="number"
                  variant="outlined"
                  value={tID.checkin.split(":")[1]}
                  onChange={e => {
                    const value = parseInt(e.target.value);
                    if (value >= 0 && value < 60) {
                      setTID({
                        ...tID,
                        checkin: tID.checkin.split(":")[0] + ":" + value
                      });
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Phút </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  label="Thời gian checkout"
                  margin="normal"
                  type="number"
                  variant="outlined"
                  value={tID.checkout.split(":")[0]}
                  onChange={e => {
                    const value = parseInt(e.target.value);
                    if (value >= 0 && value < 25) {
                      setTID({
                        ...tID,
                        checkout: value + ":" + tID.checkout.split(":")[1]
                      });
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Giờ </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  margin="normal"
                  type="number"
                  variant="outlined"
                  value={tID.checkout.split(":")[1]}
                  onChange={e => {
                    const value = parseInt(e.target.value);
                    if (value >= 0 && value < 60) {
                      setTID({
                        ...tID,
                        checkout: tID.checkout.split(":")[0] + ":" + value
                      });
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Phút </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Hủy
            </Button>
            <Button onClick={handleOk} color="primary">
              Thay đổi
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default withRouter(TimeKeepingStudentDetail);
