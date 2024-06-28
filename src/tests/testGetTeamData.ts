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
  
  if (!data) return console.log('Request failed');

  const teamName = data.teamName;
  const unicodeEmoji = data.teamData.unicodeEmoji;
  
  for (const option of data.teamData.ratingOptions) {
    console.log(option.emoji, option.rating);
  }

  console.log(teamName, unicodeEmoji);

});