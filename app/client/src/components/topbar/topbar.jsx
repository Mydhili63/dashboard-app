import { Box,IconButton } from '@mui/material';
import { useContext } from 'react';
import InputBase from '@mui/material/InputBase';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const Topbar =()=>{
    return(
        <div className='navIcons'>
            <IconButton>
                <SettingsSuggestIcon/>
            </IconButton>
            <IconButton>
                <NotificationAddIcon/>
            </IconButton>
        </div>
    )
};
export default Topbar;