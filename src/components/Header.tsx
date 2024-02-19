import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import { useFavorites } from "../hooks/useFavorites";

const Header: FC = () => {
  const { favorites } = useFavorites();
  return (
    <div>
      <header
        style={{
          width: "100%",
          height: "50px",
          background: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        <p>Saved recipes</p>
        <p> : </p>
        <p>{favorites.length}</p>
      </header>
    </div>
  );
};

export default Header;
