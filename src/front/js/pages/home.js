import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import "../../styles/output.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="text-center mt-5">
        <Button
          color="primary"
          variant="light"
          onClick={() => setTheme("light")}
        >
          Light Mode
        </Button>
        <Button
          color="primary"
          variant="shadow"
          onClick={() => setTheme("dark")}
        >
          Dark Mode
        </Button>
      </div>
    </div>
  );
};
