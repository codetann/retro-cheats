import * as styles from "./TapBar.styles";
import { FaGamepad } from "react-icons/fa";

export function TopBar() {
  return (
    <styles.Container>
      <styles.Logo>
        <FaGamepad />
        <p>Retro Cheats</p>
      </styles.Logo>
    </styles.Container>
  );
}
