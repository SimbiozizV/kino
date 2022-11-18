export default () => {
  const img = document.querySelector(".game__test-image-img");
  if (img) {
    const src = img.getAttribute("src");
    return src!.split("/").slice(-3).slice(0, 2).join("");
  }
  return "";
};
