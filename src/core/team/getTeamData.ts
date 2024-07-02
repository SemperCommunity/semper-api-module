import { SemperConnection } from '../../core';

export interface RatingOption {
  rating: number;
  emoji: {
    id: string | null;
    name: string | null;
    full: string | null;
  }
}

export interface PlayerSearchOption {
  roleId: number;
  roleName: string;
  roleEmoji: string;
  roleEmojiId: string;
  roleEmojiName: string;
  debugData: {
    discordGuildId: string;
    teamId: number;
  };
  searchCount: number;
}

export interface PlayerSearchObject {
  [key: string]: PlayerSearchOption;
}

export interface teamDataData {
  teamId: string;
  gameId: string,
  name: string;
  discordDisplayName: string;
  langCode: string;
  discordRoleId: string | null;
  unicodeEmoji: string | null;
  discordEmojiId: string | null;
  discordEmojiName: string | null;
  channelID: string | null;
  teamRating: string;
  ratingOptions: RatingOption[] | [];
  ratingTimestamp: string | null;
  color: string;
  playerSearch: PlayerSearchObject;
  teamLogo: string | null;
  headerImage: string | null;
  ratingEmoji: string | null;
}

export interface TeamData {
  success: boolean;
  statusId: number;
  teamData: teamDataData;
  teamName: string;
  langCode: string;
}

/**
 * Get the data of a team
 * 
 * @author Marwin
 * @param teamID The ID of the team you want to get the data from 
 * @returns {Promise<TeamData | null>} The data of the team or null if the request failed
 */
export async function getTeamData(this: SemperConnection, teamID: number): Promise<TeamData | null> {

  const { token, discordGuildId } = this.config;
  const url = `https://api.smpr-com.de/v1/team/get/data?discordGuildId=${discordGuildId}&teamId=${teamID}&accessToken=${token}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    // format the response to use the interface
    const data: TeamData = await response.json();

    if (response.status !== 200) {

      return null;

    } else {

      return data;

    }
  } catch (error) {
    console.error(error);
    return null;
  }
}