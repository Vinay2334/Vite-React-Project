import React from "react";
import { AppBar, Toolbar, IconButton, Stack, Link } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: "14px" }}>
        <IconButton size="large" edge="start" color="inherit">
          <img src="/vite.svg" />
        </IconButton>
        <Stack direction="row" spacing={2}>
          <Link href="/" color="inherit" underline="none" fontSize={20}>
            Home
          </Link>
          {localStorage.getItem("user-data") && (
            <Link href="/data" color="inherit" underline="none" fontSize={20}>
              Data
            </Link>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
