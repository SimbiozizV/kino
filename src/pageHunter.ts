import checkReady from "./helpers/checkReady";
import getGameMode from "./helpers/getGameMode";
import getSoreKeyBuyMode from "./helpers/getSoreKeyBuyMode";
import makeKeyBuyMode from "./helpers/makeKeyBuyMode";

let result: Record<string, string> = {};

const saveResult = (result: Record<string, string>, storeKey: string) => {
  chrome.storage.local.set({ [storeKey]: JSON.stringify(result) });
};

(() => {
  const gameMode = getGameMode();
  const storeKey = getSoreKeyBuyMode(gameMode);

  chrome.storage.local.get([storeKey], (storage) => {
    if (storeKey in storage) {
      console.log("LOADING");
      result = { ...JSON.parse(storage[storeKey]) };
    }
  });

  checkReady().then((container) => {
    console.log("ready for game");
    console.log("store: ", storeKey);

    document.querySelectorAll(".game__test-answers-item").forEach((button) => {
      if (button.innerText === result[makeKeyBuyMode(gameMode)]) {
        (button as HTMLDivElement).style.border = "1px solid green";
        setTimeout(() => {
          button.click();
        }, 300);
      }
    });

    const observer = new MutationObserver((mutationList, observer) => {
      const currentKey = makeKeyBuyMode(gameMode);

      if (mutationList.length > 1) {
        if (currentKey in result) {
          document
            .querySelectorAll(".game__test-answers-item")
            .forEach((button) => {
              if (button.innerText === result[currentKey]) {
                (button as HTMLDivElement).style.border = "1px solid green";
                setTimeout(() => {
                  button.click();
                }, 300);
              }
            });
          console.warn(result[currentKey]);
        } else {
          const firstButton = document.querySelector(
            ".game__test-answers-item"
          );
          setTimeout(() => {
            firstButton.click();
          }, 300);
        }
      } else {
        const element = mutationList[0].target as HTMLDivElement;
        const isError = element.classList.contains(
          "game__test-answers-item_state_error"
        );

        if (isError) {
          setTimeout(() => {
            const answerDiv = document.querySelector(
              ".modal-wrong-answer__title"
            );
            if (answerDiv) {
              const answer = answerDiv
                .innerText!.match(/«.+?»/)[0]
                .replace(/[«»]/g, "");

              result[currentKey] = answer;
              saveResult(result, storeKey);
            }

            document
              .querySelector(".modal-wrong-answer__content button")!
              .click();
          }, 500);
        } else {
          result[currentKey] = element.innerText;
          saveResult(result, storeKey);
        }
      }
    });

    observer.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  });
})();
