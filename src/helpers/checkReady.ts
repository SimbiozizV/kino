export default (): Promise<HTMLDivElement> =>
  new Promise((resolve, reject) => {
    setInterval(() => {
      const container = document.querySelector(".game__test-answers");
      if (container) {
        resolve(container);
      }
    }, 100);
  });
