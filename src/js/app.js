import GameSavingLoader from './gamesavingloader_promise';

GameSavingLoader.load().then((saving) => saving, (error) => console.log(error));
