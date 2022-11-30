import { Box, IconButton, Typography, useTheme,MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { slide as Menu  } from "react-burger-menu";
import { BsHouseDoorFill, BsInfoCircleFill, BsFillEnvelopeFill, BsFillGearFill } from "react-icons/bs";
import { IconName } from "react-icons/bs";
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import ReorderIcon from '@mui/icons-material/Reorder';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem active = {selected===title} onclick={()=> setSelected(title)}>
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
const Sidebar =()=>{
    return(
        <Menu>
            <a id="contact" className="menu-item" href="/user">
              <BsFillEnvelopeFill /> User
            </a>
            <a id="home" className="menu-item" href="/">
              <BsHouseDoorFill /> DashBoard
            </a>
            <a id="home" className="menu-item" href="/">
              <BarChartIcon /> Bar
            </a>
            <a id="home" className="menu-item" href="/">
              <PieChartIcon /> pie
            </a>
            <a id="home" className="menu-item" href="/">
              <LineAxisIcon /> Line
            </a>
            <a id="home" className="menu-item" href="/">
              <ReorderIcon /> Form
            </a>
            <a id="home" className="menu-item" href="/">
              <HelpOutlineIcon /> Help
            </a>
            <a id="home" className="menu-item" href="/">
              <InfoIcon /> Info
            </a>
          
            <a id="settings" className="menu-item" href="/filter">
              <BsFillGearFill /> Filter
            </a>
            <a id="about" className="menu-item" href="/about">
              <BsInfoCircleFill /> About
            </a>
        </Menu>
     )
};
export default Sidebar;