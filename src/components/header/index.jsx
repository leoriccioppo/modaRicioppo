import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

const Header = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <>
        {matches ? <HeaderMobile/> : <HeaderDesktop/>}
        </>
    )
}

export { Header }