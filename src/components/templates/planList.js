import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DynamicImport from "../../utils/lazyImport";
import Drawer from "@material-ui/core/Drawer";
import axios from "../../utils/axios";
import { useSnackbar } from "notistack";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Done";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router";

import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FaceIcon from '@material-ui/icons/Face';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import HearingIcon from '@material-ui/icons/Hearing';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LeakAddIcon from '@material-ui/icons/LeakAdd';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import PoolIcon from '@material-ui/icons/Pool';

const SurveySkillList = DynamicImport(() =>
  import("../organisms/surveySkillList")
);
const useStyles = makeStyles(theme => ({
  rootPaper: {
    padding: theme.spacing(3, 2),
    width: "100%",
    backgroundColor: "#44cbdf",
    backgroundImage: "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
    color: "#fbfefe",
    borderRadius: 0,
    boxShadow: "none"
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
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
  },
  rating1: {
    display: "flex",
    alignItems: "center"
  }
}));

const labels = {
  0: "Không đạt",
  1: "Sắp đạt",
  2: "Gần đạt",
  3: "Đạt yêu cầu",
  4: "Làm khá tốt",
  5: "Làm rất tốt"
};

const colors = [
  '#3cb44b',
  '#e6194b',
  '#ffe119',
  '#bcf60c',
  '#46f0f0',
  '#aaffc3',
  '#fabebe',
  '#ffd8b1',
  '#fffac8',
  '#e6beff',
  '#911eb4'
]


const icons = (group) => {
  switch (group) {
    case 'Ngôn ngữ': return <SortByAlphaIcon fontSize="inherit" />
    case 'Cảm giác & vận động': return <DirectionsRunIcon fontSize="inherit" />
    case 'Chơi & quan tâm vật liệu chơi': return <FaceIcon fontSize="inherit" />
    case 'Quan hệ & ảnh hưởng': return <EmojiPeopleIcon fontSize="inherit" />
    case 'Nhận thức ngôn ngữ': return <FontDownloadIcon fontSize="inherit" />
    case 'Nhận thức thể hiện': return <HeadsetMicIcon fontSize="inherit" />
    case 'Phối hợp tay mắt': return <HearingIcon fontSize="inherit" />
    case 'Vận động tinh': return <FilterVintageIcon fontSize="inherit" />
    case 'Bắt chước': return <LeakAddIcon fontSize="inherit" />
    case 'Tri giác': return <LocalFloristIcon fontSize="inherit" />
    case 'Vận động thô': return <PoolIcon fontSize="inherit" />
    default: return <SortByAlphaIcon fontSize="inherit" />
  }
}

const PlanList = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [skillGroups, setSkillGroups] = useState();
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hover, setHover] = useState(-1);
  const [surveyId, setSurveyId] = useState(null);
  const [planId, setPlanId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post("plan/list", {
        student_id: parseInt(props.match.params.id)
      })
      .then(res => {
        setSkillGroups(res.data.data);
        setPlanId(res.data.plan_id);
      })
      .catch()
      .finally(() => setLoading(false));
  }, []);

  const setCloseDetail = () => {
    setOpenDetail(false);
  };

  const updateSurvey = () => {
    axios
      .post("plan/update", {
        plan_id: planId,
        skill_id: selectedSkill.skill.id,
        rate: selectedSkill.skill.rate,
        note: selectedSkill.skill.note
      })
      .then(res => {
        enqueueSnackbar("Cập nhật thành công", {
          variant: "success"
        });
      })
      .catch(e =>
        enqueueSnackbar("Lỗi cập nhật thông tin", {
          variant: "error"
        })
      );
  };

  const setOpenDetailDrawer = (group, skill, index) => {
    setSelectedSkill({
      group,
      skill,
      index
    });
    setOpenDetail(true);
  };

  return (
    <>
      {skillGroups &&
        skillGroups.map((item, index) => (
          <ExpansionPanel key={index} style={{backgroundColor : colors[index]}}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{item.name}</Typography>
              <Typography className={classes.secondaryHeading}>
                Số lượng câu hỏi: {item.skills.length}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SurveySkillList
                group={item.name}
                skills={item.skills}
                open={setOpenDetailDrawer}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      {selectedSkill && (
        <Drawer anchor="bottom" open={openDetail} onClose={setCloseDetail}>
          <form className={classes.container} noValidate autoComplete="off">
            <Paper className={classes.rootPaper}>
              <Typography variant="h5" component="h5">
                Câu hỏi số {selectedSkill.index}
              </Typography>
              <Typography variant="h5" component="h5">
                ({selectedSkill.group})
              </Typography>
              <Typography component="p">
                {selectedSkill.skill.content}
              </Typography>
            </Paper>
            <Box
              component="fieldset"
              mb={1}
              borderColor="transparent"
              style={{
                marginTop: 20
              }}
            >
              <Typography component="legend">Đánh giá theo điểm</Typography>
              <div className={classes.rating1}>
                <Rating
                  value={selectedSkill.skill.rate}
                  onChange={(event, value) => {
                    setSelectedSkill({
                      ...selectedSkill,
                      skill: {
                        ...selectedSkill.skill,
                        rate: value
                      }
                    });
                  }}
                  icon={icons(selectedSkill.group)}
                />
                <Box ml={2}>
                  {labels[hover !== -1 ? hover : selectedSkill.skill.rate]}
                </Box>
              </div>
            </Box>
            <TextField
              label="Đánh giá của cô"
              margin="normal"
              variant="outlined"
              className={classes.textField}
              rows="2"
              multiline
              value={selectedSkill.skill.note}
              onChange={event => {
                setSelectedSkill({
                  ...selectedSkill,
                  skill: {
                    ...selectedSkill.skill,
                    note: event.target.value
                  }
                });
              }}
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
              onClick={() => {
                skillGroups.forEach((element, index) => {
                  const res = element.skills.map(obj =>
                    obj && obj.id === selectedSkill.skill.id
                      ? {
                          ...obj,
                          content: selectedSkill.skill.content,
                          rate: selectedSkill.skill.rate
                        }
                      : obj
                  );
                  skillGroups[index] = {
                    ...skillGroups[index],
                    skills: res
                  };
                });
                setSkillGroups(skillGroups);
                setCloseDetail();
                updateSurvey();
              }}
            >
              <NavigationIcon className={classes.extendedIcon} />
              Lưu
            </Fab>
          </form>
        </Drawer>
      )}
    </>
  );
};

export default withRouter(PlanList);
