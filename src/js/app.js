import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

let gameSave = new GameSaving('Hit');

export default class GameSavingLoader {
  static load() {
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
