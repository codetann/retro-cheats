import { ICheat } from "./cheat";

export class Cheat {
  private cheat: ICheat;

  constructor(cheat: ICheat) {
    this.cheat = cheat;
  }

  public getCheat: () => ICheat = () => this.cheat;
  public getId: () => string = () => this.cheat.id;
  public getDesc: () => string = () => this.cheat.desc;
  public getCode: () => string[] = () => this.cheat.code;

  public setCheat: (cheat: ICheat) => void = (cheat: ICheat) => {
    this.cheat = cheat;
  };
  public setId: (id: string) => void = (id: string) => {
    this.cheat.id = id;
  };
  public setDesc: (desc: string) => void = (desc: string) => {
    this.cheat.desc = desc;
  };
  public setCode: (code: string[]) => void = (code: string[]) => {
    this.cheat.code = code;
  };

  public toString: () => string = () => {
    return JSON.stringify(this.cheat);
  };
}
