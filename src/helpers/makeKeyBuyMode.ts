import { GameMode } from "../enums";
import makeFramesKey from "./makeFramesKey";
import makeQuotesKey from "./makeQuotesKey";

export default (mode: GameMode): string => {
  switch (mode) {
    case GameMode.Frames:
      return makeFramesKey();
    case GameMode.Quotes:
      return makeQuotesKey();
  }
};