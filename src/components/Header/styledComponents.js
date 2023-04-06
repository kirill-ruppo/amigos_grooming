import { styled } from "@mui/system";
import { Typography } from "@mui/material";



export const UpInfoHeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Rubik',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "27px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
  },
}));