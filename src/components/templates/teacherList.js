import React, { useState, useEffect } from "react";
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
import { withRouter } from "react-router";
import axios from "../../utils/axios";
import { dispatch, useGlobalState } from "../../Store";
import moment from "moment";
import { useSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TeacherList = props => {
  const [open, setOpen] = useState(false);
  const [delID, setDelID] = useState();
  const [loading, setLoading] = useState(false);
  const [teachers] = useGlobalState("teachers");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get("teacher/list")
      .then(res => {
        dispatch({
          type: "init_teachers",
          teachers: res.data
        });
      })
      .catch()
      .finally(() => setLoading(false));
  }, []);

  const remove = id => {
    setDelID(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    axios
      .post("teacher/delete", {
        id: delID
      })
      .then(res => {
        dispatch({
          type: "del_teachers",
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
    return <Chip label={type} size="small" color={"secondary"} />;
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
            <TableCell>Mã số</TableCell>
            <TableCell>Họ tên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Xóa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id && renderType(row.id)}</TableCell>
              <TableCell
                onClick={() => props.history.push("/teacher/" + row.id)}
              >
                {row.name}
              </TableCell>
              <TableCell>{moment().diff(row.dob, "years") + 1}</TableCell>
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
            Không xóa
          </Button>
          <Button onClick={handleOk} color="primary">
            Xóa luôn
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withRouter(TeacherList);
