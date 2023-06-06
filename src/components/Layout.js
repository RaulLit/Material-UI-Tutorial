import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

export const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  const handleListClick = (path) => {
    navigate(path);
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <AppBar
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          background: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.primary,
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Welcome to notes keeping</Typography>
          <Typography>Aditya</Typography>
          <Avatar src="" sx={{ marginLeft: (theme) => theme.spacing(2) }} />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
      >
        <div>
          <Typography
            variant="h5"
            sx={{ padding: (theme) => theme.spacing(2) }}
            align="center"
          >
            Notes
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              sx={{
                "& .active": {
                  background: "#f4f4f4",
                },
              }}
              className={location.pathname == item.path ? "active" : null}
              disablePadding
            >
              <ListItemButton onClick={() => handleListClick(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{ flexGrow: 1, marginTop: "4rem" }}>{children}</div>
    </div>
  );
};
