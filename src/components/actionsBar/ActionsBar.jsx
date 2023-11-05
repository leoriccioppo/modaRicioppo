import { Box, Button, Stack } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import { ItemCount} from '../counter/ItemCount';


const ActionsBar = ({itemStock, id}) => {
    
    return (
        <Box display="flex" flexDirection="column"  alignItems="center">
            <Stack direction="row" spacing={4}>

            <ItemCount stock={itemStock} itemId={id} />
            
            <IconButton>
            <InfoOutlinedIcon/>
            </IconButton>
            
            </Stack>

            <Button variant="contained" >Add to cart</Button>
        </Box>
    )
}

export { ActionsBar }