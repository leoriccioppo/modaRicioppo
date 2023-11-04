import { Box, Container } from '@mui/system';
import { Header } from '../../components/header';
import { Hero } from '../../components/hero/Hero.jsx';
import { ItemListContainer } from '../../components/itemListContainer/ItemListContainer.jsx';


const Home = () =>{
    

    return (
        <>
        <Box>
            <Header/>
        </Box>
        
        <Box>
        <Hero/>
        </Box>
        
        <Box>
            <ItemListContainer/>
        </Box>
        
        </>   
    )
};

export { Home }

