export default (): string => {
  const question = document.querySelector(".game__test-question");
  if (question) {
    return question.innerText.replace(/\s/g, "").slice(0, 30);
  }

  return "";
};
