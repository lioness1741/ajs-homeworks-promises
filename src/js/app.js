import json from './parser.js';
import read from './reader.js';
import GameSaving from './gamesaving.js';

let gameSave = new GameSaving('Hit');

export default class GameSavingLoader {
  load() {
    return read()
      .then((resolve) => resolve)
      .then((resolve) => json(resolve))
      .then((saving) => {
        gameSave = JSON.parse(saving);
        return gameSave;
      })
      .catch((error) => { throw error; });
  }
}
