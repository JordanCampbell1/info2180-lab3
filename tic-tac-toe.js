const loadFunction = () => {
  const divs = document.querySelectorAll("#board > div");

  let row = 0;
  let col = 0;

  // Add the same class to all divs
  divs.forEach((div) => {
    div.className = "square";

    div.setAttribute("data-row", row);
    div.setAttribute("data-col", col);

    // Move to the next column
    col++;

    // If we reach the end of a row, reset the column and move to the next row
    if (col === 3) {
      col = 0;
      row++;
    }
  });
};

window.onload = () => {
  loadFunction();

  const grid = [
    ["", "", ""], // Row 1
    ["", "", ""], // Row 2
    ["", "", ""], // Row 3
  ];

  const divs = document.querySelectorAll("#board > div");

  divs.forEach((element) => {
    //click functionality
    element.addEventListener("click", () => {
      if (element.textContent === "") {
        element.classList.add("X");
        element.textContent = "X"; // First click sets to "X"
      } else {
        element.textContent = element.textContent === "X" ? "O" : "X"; // Toggle between "X" and "O"

        element.classList.remove("X", "O"); // Clear previous class
        element.classList.add(element.textContent); // Add the new class ('X' or 'O')
      }

      //update the grid array

      const row = element.getAttribute("data-row");
      const col = element.getAttribute("data-col");

      // console.log("this is row", row);
      // console.log("this is col", col);

      grid[row][col] = element.textContent;

      // console.log("this is grid vlaue :", grid[row][col]);

      // console.log(grid);
    });
  });
};
