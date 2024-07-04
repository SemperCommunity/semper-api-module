<div align="center" style="display:grid;place-items:center;">

<p>
  <a href="https://discord.gg/smpr" target="_blank"><img width="90" src="https://raw.githubusercontent.com/SemperCommunity/semper-api-module/main/assets/SemperCommunity.png?sanitize=true">
  </a>
</p>

<h1>Semper API Module Data Types</h1>

</div>

## `SemperConnectionConfig`
Configuration object for the `SemperConnection` class.

Needed to create a new connection to the Semper API.
```typescript
{
  discordGuildId: string,
  token: string,
  username: string
}
```

## `SemperConnection`
Class that represents a connection to the Semper API.

Contains methods to interact with the API.

### `SemperConnection > constructor(config: SemperConnectionConfig)`
Takes a `SemperConnectionConfig` object as a parameter.

```typescript
const config: SemperConnectionConfig = {
  ...
}

const connection: SemperConnection = new SemperConnection(config)
```

## `getTeamData(teamId: number): Promise<TeamData>`
Fetches the data of a team with the given ID.

```typescript
const data: TeamData = await connection.getTeamData(12)
```

### `TeamData`
Data object representing a team.

```typescript
interface RatingOption {
    rating: number;
    emoji: {
        id: string | null;
        name: string | null;
        full: string | null;
    };
}
interface PlayerSearchOption {
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
interface PlayerSearchObject {
    [key: string]: PlayerSearchOption;
}
interface teamDataData {
    teamId: string;
    gameId: string;
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
// This is the main object that is returned by the API
interface TeamData {
    success: boolean;
    statusId: number;
    teamData: teamDataData;
    teamName: string;
    langCode: string;
}
```