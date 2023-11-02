import { Box } from '@mui/material';
import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';


const Brand = () =>{
    return(
        <Box sx={{display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
        }}>

        <Box  sx={{height: '64px'}}
        component="img" 
         src="../../../src/assets/images/logo.svg" alt="Logo Brand"
         />

         <Box>
            <ListItem component={Link} to="/">
                <ListItemText primary="Name" />
            </ListItem>
            <ListItem component={Link} to="/">
                <ListItemText primary="Brand" />
            </ListItem>
         </Box>
        </Box >

    ) 
}

export { Brand };