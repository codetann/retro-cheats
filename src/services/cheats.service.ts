import { ipcRenderer, IpcRenderer } from "electron";
import type { Platform } from "@/typings";
import { useState } from "react";

export const useCheats = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const platforms = await ipcRenderer.invoke("cheats:load");
    setPlatforms(platforms);
    setLoading(false);
  };

  return {
    platforms,
    loading,
    load,
  };
};

enum Channel {
  MAIN_CHEATS = "main-cheats",
}

class Cheats {
  private _ipc: IpcRenderer = ipcRenderer;

  constructor() {
    this._ipc.on(Channel.MAIN_CHEATS, this._onMainCheats.bind(this));
  }

  private _onMainCheats: (
    _event: Electron.IpcRendererEvent,
    ...args: any[]
  ) => Platform[] = () => {
    return [];
  };
}
