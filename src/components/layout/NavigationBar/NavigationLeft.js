import React, { Fragment, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";

// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import { data } from "../../../data/navigation";

import { MdOutlineDashboard } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: theme.palette.white,
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: theme.palette.white,
    },
  }),
}));

export const NavigationLeft = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open} className="bg-[#fff]">
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          <MdOutlineDashboard className="text-primary text-3xl" />{" "}
        </IconButton>
        {open && (
          <>
            <h1 className="text-2xl flex-1">Template</h1>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </>
        )}
      </DrawerHeader>
      <List>
        {data.map((item, i) => (
          <Item
            key={i}
            item={item}
            open={open}
            level={0}
            handleOpenSidebar={() => setOpen(true)}
          />
        ))}
      </List>

      {open && (
        <p className="text-[10px] text-center font-poppins">
          <span className="font-semibold">
            IntelliSuite Administrador Dashboard
          </span>{" "}
          <br /> Copyright © 2024
        </p>
      )}
    </Drawer>
  );
};

const Item = ({ item, open, level, handleOpenSidebar }) => {
  const [submenuOpen, setMenuOpen] = useState(false);
  // const [menuPosition, setMenuPosition] = React.useState(null);
  // const menuOpen = Boolean(menuPosition);

  const handleClick = (event) => {
    // setMenuPosition(event.currentTarget);
    open ? setMenuOpen(!submenuOpen) : handleOpenSidebar();
  };

  // const handleClose = () => {
  //   setMenuPosition(null);
  // };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        to={item.route}
        className="flex items-center px-[8px] h-10 w-full hover:bg-light-blue"
      >
        <IconButton style={{ marginLeft: level * 10 }}>{item.icon}</IconButton>
        {open && <p className="flex-1 text-start">{item.title}</p>}
        <IconButton>
          {item.submenu && (
            <Fragment>
              {submenuOpen ? (
                <FaChevronUp className="text-lg" />
              ) : (
                <FaChevronDown className="text-lg" />
              )}
            </Fragment>
          )}
        </IconButton>
      </button>

      {open &&
        submenuOpen &&
        item.submenu &&
        item.submenu.map((x, i) => (
          <Item key={i} level={level + 2} item={x} open={open} />
        ))}

      {/* {!open && (
        <BasicMenu
          anchorEl={menuPosition}
          handleClose={handleClose}
          open={menuOpen}
          item={item}
        />
      )} */}
    </div>
  );
};

// export default function BasicMenu({ anchorEl, handleClose, open, item }) {
//   const [openSubmenu, setOpenSubmenu] = useState(false);
//   const [menuPosition, setMenuPosition] = React.useState(null);

//   const handleCloseMenu = () => {
//     handleClose();
//     setOpenSubmenu(false);
//     setMenuPosition(null);
//   };

//   return (
//     <Fragment>
//       {open && item.submenu && (
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleCloseMenu}
//           MenuListProps={{
//             "aria-labelledby": "basic-button",
//           }}
//         >
//           {item.submenu.map((x, i) => (
//             <Fragment>
//               <MenuItem
//                 onClick={(e) => {
//                   if (x.submenu) {
//                     setMenuPosition(e.currentTarget);
//                     setOpenSubmenu(true);
//                   } else {
//                     handleCloseMenu();
//                   }
//                 }}
//               >
//                 {x.title}
//               </MenuItem>
//               {openSubmenu && (
//                 <BasicMenu
//                   anchorEl={menuPosition}
//                   handleClose={handleClose}
//                   open={openSubmenu}
//                   item={x}
//                 />
//               )}
//             </Fragment>
//           ))}
//         </Menu>
//       )}
//     </Fragment>
//   );
// }
