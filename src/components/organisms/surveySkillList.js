import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function SurveySkillList(props) {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(props.skills);
  }, [props.skills]);

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead
        style={{
          backgroundColor: "#44cbdf",
          backgroundImage: "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
          color: "#fbfefe",
          boxShadow: "none",
          borderRadius: 0
        }}
      >
        <TableRow>
          <TableCell>STT</TableCell>
          <TableCell>Nội dung</TableCell>
          <TableCell>Điểm đánh giá</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data &&
          data.map((item, index) => (
            <TableRow
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => props.open(props.group, item, index + 1)}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.content}</TableCell>
              <TableCell>{item.rate ? item.rate : 0}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
