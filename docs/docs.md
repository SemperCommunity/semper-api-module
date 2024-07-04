<div align="center" style="display:grid;place-items:center;">

<p>
  <a href="https://discord.gg/smpr" target="_blank"><img width="90" src="https://raw.githubusercontent.com/SemperCommunity/semper-api-module/main/assets/SemperCommunity.png?sanitize=true">
  </a>
</p>

<h1>Semper API Module Documentation</h1>

</div>

## Installation & Getting Started

>[!NOTE]
> Node.js version 16.6.0 or higher is required to use this module. <br>
> Thus, having some knowledge of JavaScript and Node.js is recommended. <br>
> Code examples are written in JavaScript since the majority of people interested in this module will be using JavaScript.

```bash
npm install semper-api
```

After installing the module, you can import it into your project like so:

```javascript
const { SemperConnection } = require('semper-api');

// In order to connect to the Semper API, you need to provide the Discord guild ID,
// your API key, and your username (latter can be anything you want).
const config = {
  discordGuildId: '<guild_id>',
  token: '<api_key>',
  username: '<username>'
}

// Create a new connection to the Semper API
const connection = new SemperConnection(config);
```

## Methods
### `getTeamData(teamId: int): Promise<TeamData>`
```javascript
// Get the data of the team with the ID 12
// Since this method returns a promise,
// you need to use .then() or async/await to resolve it.
const data = await connection.getTeamData(12);
```
For more information on the `TeamData` object, see the [Data Types](./dataTypes.md#getteamdatateamid-number-promiseteamdata) section.
