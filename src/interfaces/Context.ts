import { ClientName, ClientVersions } from "../@types";

export namespace Context {
  export interface IContext {
    clientName: ClientName;
    clientVersion: ClientVersions;
    videoId?: string;
    extraData?: any;
  }
  export interface Response {
    context: {
      capabilities?: {};
      client: {
        clientName: string;
        clientVersion: string;
      };
    };
  }
}
