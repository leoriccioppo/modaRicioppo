import { Box, Button, Stack } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import { ItemCount} from '../counter/ItemCount';


const ActionsBar = ({handleClickUp, handleClickDown, quantity, handleClickButton, message}) => {
    
    return (
        <Box display="flex" flexDirection="column"  alignItems="center">
            <Stack direction="row" spacing={4}>

            <ItemCount handleClickUp={handleClickUp} handleClickDown={handleClickDown} quantity={quantity} />

            <IconButton>
            <InfoOutlinedIcon/>
            </IconButton>
            
            </Stack>

            <Button variant="contained" onClick={handleClickButton} >{message}</Button>
        </Box>
    )
}

export { ActionsBar }