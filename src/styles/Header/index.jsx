import { styled } from '@mui/material/styles';
import { AppBar } from "@mui/material";
import { Typography, List, IconButton } from '@mui/material';
import { useDrawer } from '../../contexts/drawerContext'


export const AppBarContainer = styled(AppBar)(() => ({
    height: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
}));


export const MyList = styled(List)(({type}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItens: 'center'
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',

    left: useDrawer().DrawerWidth,
    zIndex: 6999,      
  }));