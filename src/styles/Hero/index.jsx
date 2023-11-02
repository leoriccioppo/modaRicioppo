import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroContainer = styled(Box)(({HeroImage}) => ({
  width: "80%",
  height: "80%",
  justifyContent: "center",
  margin: "auto",
  paddingTop:"6em",
}));

export const HeroImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  height: "80%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "300px",
  },
}));


