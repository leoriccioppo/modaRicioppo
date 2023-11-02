import { Drawer, useTheme } from '@mui/material/Drawer';
import { Box } from '@mui/system';
const CartMenu = () =>{

    const theme = useTheme();

    return (
        <>
        <Drawer variant="temporary">
            <Box widht={theme.spacing(28)} heigth="100%">
            </Box>
        </Drawer>
        </>
    )

};

export { CartMenu }