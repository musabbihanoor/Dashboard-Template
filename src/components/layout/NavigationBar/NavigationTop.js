import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../../data/navigation";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavigationTop = () => {
  return (
    <div className="w-full drop-shadow bg-white p-5">
      <div className="flex gap-5">
        {data.map((x, i) => (
          <Item item={x} />
        ))}
      </div>
    </div>
  );
};

const Item = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      {item.submenu ? (
        <button className="flex gap-2" onClick={handleClick}>
          {item.icon}
          <h1>{item.title}</h1>
        </button>
      ) : (
        <Link className="flex gap-2" to={item.route}>
          {item.icon}
          <h1>{item.title}</h1>
        </Link>
      )}
      {item.submenu && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Submenu item={item} />
        </Menu>
      )}
    </Fragment>
  );
};

const Submenu = ({ item }) => {
  return (
    <Fragment>
      {item.submenu.map((x, i) => (
        <Fragment>
          {x.submenu ? (
            <SubItem item={x} />
          ) : (
            <MenuItem>
              <Link to={x.route}>{x.title}</Link>
            </MenuItem>
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};

const SubItem = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  return (
    <Fragment>
      <MenuItem onClick={handleToggleSubmenu}>
        <Fragment>
          {item.title}
          <Fragment>
            {submenuOpen ? (
              <FaChevronUp className="ml-2 text-xs" />
            ) : (
              <FaChevronDown className="ml-2 text-xs" />
            )}
          </Fragment>
        </Fragment>
      </MenuItem>
      {submenuOpen && <Submenu item={item} />}
    </Fragment>
  );
};

export default NavigationTop;
