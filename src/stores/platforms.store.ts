import { Platform, Channel } from "@/typings";
import create from "zustand";
import { ipcRenderer } from "electron";

interface State {
  platforms: Platform[];
  loading: boolean;
  load: () => Promise<void>;
  invoke: (channel: Channel, ...args: any[]) => Promise<any>;
  update: (platforms: Platform[]) => void;
}

export const usePlatformStore = create<State>((set) => ({
  platforms: [],
  loading: false,
  load: async () => {
    set({ loading: true });
    const platforms = await ipcRenderer.invoke(Channel.CHEATS_LOAD);
    set({ platforms, loading: false });

    // ipc listeners
    ipcRenderer.on(Channel.CHEATS_LOAD, (_event, platforms: Platform[]) => {
      set({ platforms });
    });
  },
  invoke: (channel: Channel, ...args: any[]) => {
    return ipcRenderer.invoke(channel, ...args);
  },
  update: (platforms) => set({ platforms }),
}));

const store = usePlatformStore();

store.load();

store.invoke(Channel.CHEATS_LOAD, "test");
