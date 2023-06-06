import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
      <div style={{ flexGrow: 1 }}>{children}</div>
    </div>
  );
};
