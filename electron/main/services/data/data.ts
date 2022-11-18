import { join } from "path";
import fs from "fs";
import { Database, DatabasePlatfroms, PlatformList } from "./db.d";
import { Platform } from "../platforms/platforms.d";

class DataService {
  private cheatsDB: any = JSON.parse(
    fs.readFileSync(join(__dirname, "./cheats.json"), "utf8")
  );

  public getCheats() {
    return this.cheatsDB;
  }

  public getCheatsByPlatform(platform: PlatformList) {
    return this.cheatsDB[platform];
  }
}
