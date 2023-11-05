import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  margin: "auto",
  paddingTop:"4.2em",
  overflowX: "hidden",
}));

export const HeroImage = styled("img")(({ src, theme }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  height: "80%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "80%",
  },
}));
