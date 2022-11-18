import { join } from "path";
import fs from "fs";
import { PLATFORMS } from "./database.d";

class Database {
  private DB_PATH: string = join(__dirname, "./database.json");

  public getAll() {
    return JSON.parse(fs.readFileSync(this.DB_PATH, "utf8"));
  }

  public getPlatforms() {
    return this.getAll().platforms;
  }

  public getPlatformById(id: string) {
    return this.getPlatforms().find((platform: any) => platform.id === id);
  }

  public getPlatformByName(name: PLATFORMS) {
    return this.getPlatforms().find((platform: any) => platform.name === name);
  }

  public getGames() {
    return this.getAll().games;
  }

  public getGameById(id: string) {
    return this.getGames().find((game: any) => game.id === id);
  }

  public getGameByName(name: string) {
    return this.getGames().find((game: any) => game.name === name);
  }

  public getCheats() {
    return this.getAll().cheats;
  }

  public getCheatsByGameId(id: string) {
    return this.getCheats().find((cheat: any) => cheat.id === id);
  }

  public getCheatsByGameName(name: string) {
    return this.getCheats().find((cheat: any) => cheat.name === name);
  }

  public getCheatsByPlatform(platform: PLATFORMS) {
    return this.getCheats().filter((cheat: any) => cheat.platform === platform);
  }

  public getCheatsByPlatformId(id: string) {
    return this.getCheats().filter((cheat: any) => cheat.platform_id === id);
  }
}
