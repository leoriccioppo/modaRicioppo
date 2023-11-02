import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { AppBar } from "@mui/material";
import { Typography, List } from '@mui/material';



export const AppBarContainer = styled(AppBar)(() => ({
    height: '64px',
    display: 'flex',
    justifyContent: 'center',
}));

export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: '"Roboto", "cursive"',
   
  }));

export const MyList = styled(List)(({type}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItens: 'center'
}));