import { SemperConnection, SemperConnectionConfig } from '../index';
import { token, discordGuildId } from '../../config.json';
import { PlayerSearchOption } from '../core/team/getTeamData';

const config: SemperConnectionConfig = {
  discordGuildId,
  token,
  username: 'TestUser',
};

const connection = new SemperConnection(config);
const teamData = connection.getTeamData(10);

teamData.then((data) => {

  if (!data) return console.log('Request failed');

  const teamName = data.teamName;
  const unicodeEmoji = data.teamData.unicodeEmoji;

  const playerSearch = data.teamData.playerSearch;

  for (const key in playerSearch) {
    const player: PlayerSearchOption = playerSearch[key];
    console.log(player.roleName, player.roleEmoji);
  }

  console.log(teamName, unicodeEmoji);

});