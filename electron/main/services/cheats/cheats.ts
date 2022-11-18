import { join } from "path";
import fs from "fs";
import { ipcMain } from "electron";
import { Cheat } from "./cheat";

const path = join(__dirname, "../../../electron/resources/cheats.json");
const file = JSON.parse(fs.readFileSync(path, "utf8"));

function _getCheats() {
  return file;
}

ipcMain.on("cheats:load", (event) => {
  event.sender.send("cheats:load", _getCheats());
});

class Platform {
  constructor(public id: string, public name: string, public cheats: Cheat[]) {}
}
