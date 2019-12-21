import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import useFormInput from "../../utils/useFormInput";
import { useSnackbar } from "notistack";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "../../utils/axios";
import { dispatch } from "../../Store";
import { withRouter } from "react-router";

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
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

const SkillGroupInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const name = useFormInput();
  const [type, setType] = useState(1);
  const [ID, setID] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.update) {
      setLoading(true);
      axios
        .post("skill-group/detail", { id: parseInt(props.match.params.id) })
        .then(res => {
          const { skill } = res.data;
          setID(skill.id);
          name.setValue(skill.name);
          setType(skill.group_type_id);
        })
        .catch(err =>
          enqueueSnackbar(err.message, {
            variant: "error"
          })
        )
        .finally(() => setLoading(false));
    }
  }, []);

  const handleChangeType = event => {
    setType(parseInt(event.target.value));
  };

  const clear = () => {
    name.setValue("");
  };

  const addTeacher = () => {
    setLoading(true);
    axios
      .post(props.update ? "skill-group/update" : "skill-group/add", {
        id: props.update ? ID : null,
        name: name.value,
        type
      })
      .then(res => {
        if (!props.update) {
          dispatch({
            type: "add_skill_groups",
            skill_groups: [
              {
                id: res.data.id,
                name: name.value,
                group_type_id: type
              }
            ]
          });
          clear();
        }
        enqueueSnackbar(
          props.update
            ? "Xác nhận cập nhật thành công!"
            : "Xác nhận thêm thành công!",
          { variant: "success" }
        );
        props.update && props.history.push("/skill-groups");
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
        <RadioGroup value={type} onChange={handleChangeType} row>
          <FormControlLabel
            labelPlacement="start"
            label="Thang phát triển"
            value={1}
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="start"
            label="Thang hành vi"
            value={0}
            control={<Radio />}
          />
        </RadioGroup>
        <TextField
          label="Mặt phát triển"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...name}
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
          onClick={addTeacher}
        >
          <NavigationIcon className={classes.extendedIcon} />
          {props.update ? "Sửa thông tin" : "Thêm mặt phát triển"}
        </Fab>
      </form>
    </>
  );
};

export default withRouter(SkillGroupInput);
