import * as styles from "./SideBar.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { usePlatformStore } from "@/stores";
import { useEffect } from "react";

const routes = [
  {
    name: "Nintendo - Gameboy",
    path: "/nintendo-gameboy",
  },
  {
    name: "Nintendo - Gameboy Color",
    path: "/nintendo-gameboy-color",
  },
  {
    name: "Nintendo - Gameboy Advance",
    path: "/nintendo-gameboy-advance",
  },
];

export function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <styles.Container>
      {routes?.map((route) => (
        <styles.Label
          key={route.name}
          active={location.pathname === route.path}
          onClick={() => navigate(route.path)}
        >
          {route.name}
        </styles.Label>
      ))}
    </styles.Container>
  );
}
