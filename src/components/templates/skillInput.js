import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import useFormInput from "../../utils/useFormInput";
import useFormDropdown from "../../utils/useFormDropdown";
import { useSnackbar } from "notistack";
import axios from "../../utils/axios";
import { dispatch } from "../../Store";
import { withRouter } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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

const SkillInput = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const content = useFormInput();
  const group = useFormDropdown();
  const [ID, setID] = useState();
  const [loading, setLoading] = useState(false);
  const [skillGroups, setSkillGroups] = useState();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    if (props.update) {
      setLoading(true);
      axios
        .post("skill/detail", { id: parseInt(props.match.params.id) })
        .then(res => {
          const { skill } = res.data;
          setID(skill.id);
          content.setValue(skill.content);
          group.setValue(skill.group_id);
        })
        .catch(err =>
          enqueueSnackbar(err.message, {
            variant: "error"
          })
        )
        .finally(() => setLoading(false));
    }
    axios
      .get("skill-group/list")
      .then(res => {
        setSkillGroups(res.data);
      })
      .catch(err =>
        enqueueSnackbar(err.message, {
          variant: "error"
        })
      );
  }, []);

  const clear = () => {
    content.setValue("");
  };

  const addTeacher = () => {
    setLoading(true);
    axios
      .post(props.update ? "skill/update" : "skill/add", {
        id: props.update ? ID : null,
        content: content.value,
        group: group.value
      })
      .then(res => {
        if (!props.update) {
          const _group = skillGroups.find(item => {
            return item.id === group.value;
          });
          dispatch({
            type: "add_skills",
            skills: [
              {
                id: res.data.id,
                content: content.value,
                name: _group.name
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
        props.update && props.history.push("/skills");
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
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Chọn mặt phát triển
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            {...group}
            labelWidth={labelWidth}
          >
            {skillGroups &&
              skillGroups.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextField
          label="Kỹ năng"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          {...content}
          rows="4"
          multiline
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
          {props.update ? "Sửa kỹ năng" : "Thêm kỹ năng"}
        </Fab>
      </form>
    </>
  );
};

export default withRouter(SkillInput);
