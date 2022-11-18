import { GameMode } from "../enums";
import { QUERY_GAME_MODE } from "../constants";

export default (): GameMode => {
  const url = new URL(window.location);
  debugger;
  const mode = url.searchParams.get(QUERY_GAME_MODE);
  return mode && Object.values(GameMode).includes(mode)
    ? (mode as GameMode)
    : GameMode.Frames;
};
