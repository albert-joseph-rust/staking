import { useLocation, Outlet } from "react-router-dom";
import { Box, Hidden } from "@mui/material";
//
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <Box sx={{ background: 'rgb(64, 64, 64)' }}>
        <MainNavbar />
          <Outlet />
        <MainFooter />
      </Box>
    </>
  );
}
