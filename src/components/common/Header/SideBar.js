import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
// import { SidebarData, sidebarData } from 'components/common/Header/SidebarData';

import { useContext } from "react";
import { LoginedContext, MemNickContext, MemTypeContext } from "components/member/LoginProvider"
import { SidebarData, SidebarDataN, SidebarDataB, SidebarDataA } from 'components/common/Header/SidebarData';



// useContext(MemTypeContext)=="일반회원"? setSidedata={SidebarDataN}:setSidedata={SidebarDataB}


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [sidedata, setSidedata] = React.useState(SidebarData);
  // const {aa} = useContext(MemTypeContext)
  // (function aa(){
  //   const sdata = this.context.MemTypeContext;    
  //   console.log={sdata};
  //   if(sdata == '일반회원'){
  //     setSidedata = SidebarDataN;
  //   }else{
  //     setSidedata = SidebarData;
  //   }    
  // })();


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      
      <List>
        {/* {MemTypeContext ==='일반회원'?"일반":"일반아님" } */}        
        {/* {SidebarData.map((item, index) => ( */}
        {/* {SidebarData.map((item, index) => ( */}
        {sidedata.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton to={item.path} >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Box>
        
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton size="large"
              edge="end"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 3 }}
              onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </IconButton>            
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box >
    </div>
  );
}
