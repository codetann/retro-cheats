import { Platforms } from "../platforms/platforms";

export interface Database {
  platforms: Platforms;
}

export enum PlatformList {
  NINTENDO_GAMEBOY_ADVANCED = "nintendo-gameboy-advanced",
  NINTENDO_GAMEBOY_COLOR = "nintendo-gameboy-color",
  NINTENDO_GAMEBOY = "nintendo-gameboy",
  NINTENDO_NES = "nintendo-nes",
  NINTENDO_SNES = "nintendo-snes",
  SEGA_GENESIS = "sega-genesis",
  SEGA_MASTER_SYSTEM = "sega-master-system",
  SEGA_SATURN = "sega-saturn",
  SEGA_SG1000 = "sega-sg1000",
  SEGA_MEGADRIVE = "sega-megadrive",
  SEGA_GAMEGEAR = "sega-gamegear",
  SEGA_32X = "sega-32x",
  SEGA_CD = "sega-cd",
  SEGA_DREAMCAST = "sega-dreamcast",
  SEGA_PICO = "sega-pico",
  SEGA_SG1000_II = "sega-sg1000-ii",
  SEGA_SG1000_III = "sega-sg1000-iii",
  SEGA_SG1000_IV = "sega-sg1000-iv",
  SEGA_SG1000_V = "sega-sg1000-v",
  SEGA_SG1000_VI = "sega-sg1000-vi",
  SEGA_SG1000_VII = "sega-sg1000-vii",
  SEGA_SG1000_VIII = "sega-sg1000-viii",
  SEGA_SG1000_IX = "sega-sg1000-ix",
}
