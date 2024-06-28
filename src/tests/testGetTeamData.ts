import { SemperConnection, SemperConnectionConfig } from '../index';
import { token, discordGuildId } from '../../config.json';

const config: SemperConnectionConfig = {
  discordGuildId,
  token,
  username: 'TestUser',
};

const connection = new SemperConnection(config);
const teamData = connection.getTeamData(10);

teamData.then((data) => {
  console.log(data);
});