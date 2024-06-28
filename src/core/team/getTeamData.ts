import { SemperConnection } from '../../core';

// This is just a test for now
export interface TeamData {
  name: string | null;
  success: boolean;
}

/**
 * Get the data of a team
 * 
 * @param teamID The ID of the team you want to get the data from 
 * @returns {Promise<TeamData>} The data of the team
 */
export async function getTeamData(this: SemperConnection, teamID: number): Promise<TeamData> {

  const { token, discordGuildId } = this.config;
  const url = `https://api.smpr-com.de/v1/team/get/data?discordGuildId=${discordGuildId}&teamId=${teamID}&accessToken=${token}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();

    if (response.status !== 200) {
      return {
        name: null,
        success: false,
      };
    } else {
      return {
        name: data.teamData.name,
        success: true,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      name: null,
      success: false,
    };
  }
}