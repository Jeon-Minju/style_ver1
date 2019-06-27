import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import BottomContent from "./BottomContent";
import UserDropDown from "./UserDropDown";
import DrawerDropDown from "./DrawerDropDown";

import Image1 from "./Images/white.png";
import Image2 from "./Images/robot-solid.png";
import Image3 from "./Images/file-export-solid.png";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  contentHeader: {
    display: "flex"
  },
  contentHeaderLink: { marginLeft: "auto" },
  contentHeaderText: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  contentBelow: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  bhButtons: {
    marginRight: theme.spacing(1)
  },
  bhDropdown: {
    marginLeft: "auto"
  },
  fourPapers: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between"
    }
  },
  firstPaper: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  threePapers: {
    [theme.breakpoints.down("sm")]: {
      width: "30%",
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1)
    }
  }
}));

export default function OwnerManage(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div style={{ backgroundColor: "#0e0e3a", height: "100%" }}>
      <div className={classes.toolbar}>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              marginLeft: "31px",
              marginTop: "21px",
              backgroundImage: `url(${Image1})`,
              backgroundSize: "cover",
              width: "56px",
              height: "58px"
            }}
          />
          <div style={{ flexGrow: "1" }} />
          <DrawerDropDown />
        </div>
      </div>
      <Divider />
      <Typography style={{ color: "#ffffff" }}>달력 라이브러리 사용</Typography>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Button
          color="primary"
          variant="contained"
          style={{
            backgroundColor: "#297bff"
          }}
        >
          <div
            style={{
              backgroundImage: `url(${Image2})`,
              backgroundSize: "cover",
              height: "26px",
              width: "32.5px"
            }}
          />
          <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
            챗봇 만들기
          </div>
        </Button>
        <List style={{ color: "#ffffff" }}>
          {[
            "- 기본 정보",
            "- 메뉴 등록",
            "- 안내/예약",
            "- 예약 수정/취소",
            "- 추가 문의 사항"
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <div style={{ marginTop: `calc(100% - 56px)` }}>
          <Button
            color="primary"
            variant="contained"
            style={{ backgroundColor: "#297bff" }}
          >
            <div
              style={{
                backgroundImage: `url(${Image3})`,
                backgroundSize: "cover",
                height: "26px",
                width: "29.25px"
              }}
            />
            <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
              챗봇 내보내기
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: "#ffffff" }}>
          <IconButton
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            style={{ color: "#434f5b" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ color: "#434f5b" }}>
            카페 에일
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <UserDropDown />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.contentHeader}>
          <h1
            className={classes.contentHeaderText}
            style={{ fontWeight: "bold" }}
          >
            $ 주문 관리
          </h1>
          <div className={classes.contentHeaderLink}>
            <Link
              variant="button"
              href="#"
              style={{ marginRight: "5px" }}
              onMouseout="this.style.color='#434f5b';"
              onMouseover="this.style.color='#297bff';"
            >
              지난 주문 관리하기 |
            </Link>
            <Link
              variant="button"
              href="#"
              onMouseout="this.style.color='#434f5b';"
              onMouseover="this.style.color='#297bff';"
            >
              새로운 주문 보기
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              style={{ marginLeft: "5px" }}
              onMouseout="this.style.color='#434f5b';"
              onMouseover="this.style.color='#297bff';"
            >
              | 새로 고침
            </Link>
          </div>
        </div>

        <div className={classes.fourPapers}>
          <Paper className={classes.firstPaper}>
            <Typography>영업일</Typography>
            <h1 style={{ fontWeight: "bold" }}>2019년 6월 22일</h1>
          </Paper>
          <Paper className={classes.threePapers}>
            <Typography>주문</Typography>
            <div style={{ float: "left" }}>
              <h1 style={{ color: "#297bff", display: "inline-block" }}>N</h1>
              <Typography style={{ display: "inline-block" }}>건</Typography>
            </div>
          </Paper>
          <Paper className={classes.threePapers}>
            <Typography>문의</Typography>
            <div style={{ float: "left" }}>
              <h1 style={{ color: "#297bff", display: "inline-block" }}>N</h1>
              <Typography style={{ display: "inline-block" }}>건</Typography>
            </div>
          </Paper>
          <Paper className={classes.threePapers}>
            <Typography>예상매출</Typography>
            <div style={{ float: "left" }}>
              <h1 style={{ color: "#297bff", display: "inline-block" }}>N</h1>
              <Typography style={{ display: "inline-block" }}>원</Typography>
            </div>
          </Paper>
        </div>
        <div className={classes.contentBelow}>
          <BottomContent />
        </div>
      </main>
    </div>
  );
}

OwnerManage.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};
