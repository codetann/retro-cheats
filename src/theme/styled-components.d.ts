import "styled-components";
import { theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    shadows: typeof theme.shadows;
    transitions: typeof theme.transitions;
    zIndex: typeof theme.zIndex;
    spacing: typeof theme.spacing;
    sizes: typeof theme.sizes;
  }
}
