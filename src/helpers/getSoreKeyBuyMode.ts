import { GameMode } from "../enums";
import {
  DESCRIPTIONS_STORE_KEY,
  FRAME_STORE_KEY,
  MEMES_STORE_KEY,
  NERO_STORE_KEY,
  QUOTES_STORE_KEY,
  UNIVERSE_STORE_KEY,
} from "../constants";

export default (mode: GameMode): string => {
  switch (mode) {
    case GameMode.Frames:
      return FRAME_STORE_KEY;
    case GameMode.Quotes:
      return QUOTES_STORE_KEY;
    case GameMode.Descriptions:
      return DESCRIPTIONS_STORE_KEY;
    case GameMode.Memes:
      return MEMES_STORE_KEY;
    case GameMode.Universe:
      return UNIVERSE_STORE_KEY;
    case GameMode.Nero:
      return NERO_STORE_KEY;
  }
};
