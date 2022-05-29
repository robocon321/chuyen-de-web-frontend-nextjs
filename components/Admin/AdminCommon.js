import React, {useState, useContext, useEffect} from "react";
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
import { Toolbar } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import {AuthContext} from '../../contexts/providers/AuthProvider';

const drawerWidth = 240;

const AdminCommon = (props) => {
  const { authState, loadAccount } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    loadAccount();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${mobileOpen ? drawerWidth : 0}px)` },
          ml: { sm: `${mobileOpen ? drawerWidth : 0}px` },
          bgcolor: 'white'
        }}
      >
          <Header onToggle={handleDrawerToggle}/>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: mobileOpen ? drawerWidth : 0 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: mobileOpen ? drawerWidth : 0
            }
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: mobileOpen ? drawerWidth : 0
            }
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: '#f5f5f5',
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${mobileOpen ? drawerWidth : 0}px)` }
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default AdminCommon;