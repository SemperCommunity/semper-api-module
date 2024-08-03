import { getTeamData } from "./core/team/getTeamData";

export interface SemperConnectionConfig {
  discordGuildId: string;
  token: string;
  username: string;
}

export interface SemperConnection {
  config: SemperConnectionConfig;
  getTeamData: typeof getTeamData;
}

export class SemperConnection {
  constructor(public config: SemperConnectionConfig) {
    this.config = config;
  }

  static initializeCoreCalls() {
    const prototype = SemperConnection.prototype;
    prototype.getTeamData = getTeamData;
  }
}

SemperConnection.initializeCoreCalls();
