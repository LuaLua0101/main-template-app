import React, { useEffect, useState } from "react";
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
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { dispatch, useGlobalState } from "../../Store";
import axios from "../../utils/axios";
import moment from "moment";
import { useSnackbar } from "notistack";
import DynamicImport from "../../utils/lazyImport";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";

const Detail = DynamicImport(() => import("../templates/notifyDetail"));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "scroll"
  }
});

export default function NotifyList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({
    id: null,
    open: false
  });
  const [notifies] = useGlobalState("notifies");
  const [loading, setLoading] = useState(false);
  const [pinned, setPinned] = useState([]);
  const [delID, setDelID] = useState();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get("notify/list")
      .then(res => {
        dispatch({
          type: "init_notifies",
          notify: res.data
        });
      })
      .catch()
      .finally(() => setLoading(false));

    axios
      .get("notify/pinned-list")
      .then(res => {
        setPinned(res.data);
      })
      .catch();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const remove = id => {
    setDelID(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    axios
      .post("notify/delete", {
        id: delID
      })
      .then(res => {
        dispatch({
          type: "del_notify",
          id: delID
        });
        enqueueSnackbar("Xác nhận đã xóa", { variant: "success" });
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
        label={type === 0 ? "GV" : "PH"}
        size="small"
        color={type === 0 ? "primary" : "secondary"}
      />
    );
  };

  const detailDialog = (
    <Dialog fullScreen open={detail.open}>
      <AppBar
        style={{
          position: "fixed",
          backgroundColor: "#fbfefe",
          backgroundImage:
            "linear-gradient(to right, #fff792 30%, #fef37f 52%,#ffef6d 100%)"
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() =>
              setDetail({
                id: null,
                open: false
              })
            }
            style={{
              color: "black"
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <Detail id={detail.id} />
    </Dialog>
  );

  const unpin = id => {
    console.log(id);
    axios
      .post("notify/unpin", {
        id
      })
      .then(res => {
        setPinned(
          pinned.filter((value, index, arr) => {
            return value.id !== id;
          })
        );
        enqueueSnackbar("Đã bỏ ghim thông báo", { variant: "success" });
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      );
  };
  const pin = notify_id => {
    console.log(notify_id);
    axios
      .post("notify/pin", {
        id: notify_id
      })
      .then(res => {
        setPinned([
          ...pinned,
          {
            id: res.id,
            notify_id
          }
        ]);
        enqueueSnackbar("Đã ghim thông báo", { variant: "success" });
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      );
  };

  const renderPinIcon = id => {
    const res = pinned.find(item => {
      return item.notify_id === id;
    });
    return res ? (
      <BookmarkIcon
        style={{
          color: "#01ca7c",
          cursor: "pointer",
          fontSize: 30
        }}
        onClick={() => unpin(res.id)}
      />
    ) : (
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        className={classes.margin}
        style={{
          display: "flex",
          backgroundColor: "#44cbdf",
          backgroundImage: "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
          color: "#fbfefe",
          boxShadow: "none"
        }}
        onClick={() => pin(id)}
      >
        <BookmarkIcon className={classes.extendedIcon} />
        Ghim
      </Fab>
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
            <TableCell>Tiêu đề</TableCell>
            <TableCell>Loại</TableCell>
            <TableCell>Ngày lên lịch</TableCell>
            <TableCell>Ghim</TableCell>
            <TableCell>Xóa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notifies.map(row => (
            <TableRow key={row.id}>
              <TableCell
                onClick={() => {
                  setDetail({
                    open: true,
                    id: row.id
                  });
                }}
              >
                {row.title && row.title.substring(0, 10)}
              </TableCell>
              <TableCell>{renderType(row.type)}</TableCell>
              <TableCell>
                {moment(row.active_date).format("DD/MM/YY")}
              </TableCell>
              <TableCell>{renderPinIcon(row.id)}</TableCell>
              <TableCell>
                <DeleteIcon
                  style={{
                    color: "black",
                    cursor: "pointer",
                    fontSize: 30
                  }}
                  onClick={() => remove(row.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {detailDialog}
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
