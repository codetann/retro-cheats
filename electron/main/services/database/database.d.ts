export enum PLATFORMS {
  NINTENDO_GAMEBOY = "nintendo-gameboy",
  NINTENDO_GAMEBOY_ADVANCE = "nintendo-gameboy-advance",
  NINTENDO_GAMEBOY_COLOR = "nintendo-gameboy-color",
}

export interface IPlatform {
  id: string;
  name: PLATFORMS;
}

export interface IPlatforms {
  platforms: IPlatform[];
}

export interface IGame {
  id: string;
  name: string;

  platform_id: string;
}

export interface IGames {
  games: IGame[];
}

export interface ICheat {
  id: string;
  desc: string;
  code: string[];
}

export interface ICheats {
  cheats: ICheat[];
}

export interface IDatabase {
  platforms: IPlatforms;
  games: IGames;
  cheats: ICheats;
}
