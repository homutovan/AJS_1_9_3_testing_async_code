import GameSavingLoader from '../gamesavingloader_promise';
import { saveData } from '../reader';
import GameSaving from '../gamesaving';
import parser from '../mockparser';

jest.mock('../mockparser');

const badSaveData = '"id": 9,"created": 1546300800, "userInfo": {"id": 1, "name": "Hitman", "level": 10, "points":2000}}';
const testData = '{"id": 9,"created": 1546300800, "userInfo": {"id": 1, "name": "Rembo", "level": 10, "points":2000}}';
const hitman = new GameSaving(JSON.parse(saveData));
const rembo = new GameSaving(JSON.parse(testData));

beforeEach(() => {
  jest.resetAllMocks();
});

test('Test case №1', async () => {
  parser.mockReturnValue(saveData);
  const save = await GameSavingLoader.load();
  expect(save).toEqual(hitman);
});

test('Test case №2', async () => {
  parser.mockReturnValue(Data);
  const save = await GameSavingLoader.load();
  expect(save).toEqual(rembo);
});

test('Test case №3', async () => {
  parser.mockReturnValue(saveData);
  const save = await GameSavingLoader.load();
  expect(save).not.toEqual(rembo);
});

test('Test case №4', async () => {
  parser.mockReturnValue(badSaveData);
  expect.assertions(1);
  await expect(GameSavingLoader.load()).rejects.toThrow(new Error('Unexpected token : in JSON at position 4'));
});
