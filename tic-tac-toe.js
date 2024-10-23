const loadFunction = () => {
  const divs = document.querySelectorAll("#board > div");

  // Add the same class to all divs
  divs.forEach((div) => (div.className = "square"));
};

window.onload = () => {
  loadFunction();
};
