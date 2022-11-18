import { GameMode } from "../enums";
import { FRAME_STORE_KEY, QUOTES_STORE_KEY } from "../constants";

export default (mode: GameMode): string => {
  switch (mode) {
    case GameMode.Frames:
      return FRAME_STORE_KEY;
    case GameMode.Quotes:
      return QUOTES_STORE_KEY;
  }
};
