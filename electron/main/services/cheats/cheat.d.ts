export interface Cheat {
  id: string;
  desc: string;
  code: string[];
  enable: boolean;
}

export interface Platform {
  id: string;
  name: string;
  cheats: Cheat[];
}

export enum Channel {
  CHEATS_LOAD = "cheats:load",
  CHEATS_UPDATE = "cheats:update",
}
