import json from './mockparser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return new Promise(
      (resolve, reject) => read()
        .then((data) => json(data))
        .then((data) => resolve(new GameSaving(JSON.parse(data))))
        .catch((err) => reject(err)),
    );
  }
}
