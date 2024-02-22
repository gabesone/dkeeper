import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1
        id="logo-reload"
        onClick={() => {
          window.location.reload();
        }}
      >
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
