import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

// costum component from classname meterialUI "https://material-ui.com/customization/components/"
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#987",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search Topics"
              startAdornment={<SearchIcon fontSize="small" />}
              className={classes.searchInput}
            />
          </Grid>

          <Grid item sm></Grid>

          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge>
                <PowerSettingsNewIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
