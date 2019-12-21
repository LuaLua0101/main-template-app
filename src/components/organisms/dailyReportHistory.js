import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflow: "auto"
  }
});

export default function DailyReportHistory() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([
    { type: 12345, total: "nguyễn văn a", time: "1 giờ trước" },
    { type: 12345, total: "nguyễn văn a", time: "2 giờ trước" }
  ]);

  const renderType = type => {
    return <Chip label={type} size="small" color="secondary" />;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <TableCell>Mã số</TableCell>
            <TableCell>Tên học sinh</TableCell>
            <TableCell>Thời gian thêm</TableCell>
            <TableCell>Xóa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow>
              <TableCell>{renderType(row.type)}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <DeleteIcon
                  style={{
                    color: "black",
                    cursor: "pointer",
                    fontSize: 30
                  }}
                  onClick={handleClickOpen}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
