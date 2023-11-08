import { Drawer, Box } from '@mui/material';
import { NavBar } from './NavBar';
import { useDrawer } from '../../../contexts/drawerContext';
import{ DrawerCloseButton } from '../../../styles/Header';
import CloseIcon from '@mui/icons-material/Close'

const NavMobile = () =>{

const { drawerOpen, setDrawerOpen} = useDrawer ();

    return (
        <Box heigth='100%'>
        {drawerOpen && (
            <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon
                sx={{fontSize:"2.5rem", color:"pink"}}
                />
            </DrawerCloseButton>

        ) }
         <Drawer open={drawerOpen}>
            <NavBar  type="column"/>
        </Drawer>
        </Box>
    )
}

export { NavMobile }