import { styled } from '@mui/material/styles';
import { AppBar } from "@mui/material";
import { Typography, List } from '@mui/material';



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