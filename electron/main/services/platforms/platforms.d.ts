import { Cheat } from "../cheats/cheat";

export interface Platform {
  id: string;
  name: string;
  cheats: Cheat[];
}

export type Platforms = Platform[];
