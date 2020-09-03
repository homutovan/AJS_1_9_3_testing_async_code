import json from './mockparser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const jsonData = await json(data);
    return await new GameSaving(JSON.parse(jsonData));
  }
}
