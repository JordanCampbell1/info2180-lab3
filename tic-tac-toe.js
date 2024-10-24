const checkWin = (grid) => {
  const size = 3; // 3x3 grid
  let winner = null;

  // Check all rows
  for (let row = 0; row < size; row++) {
    if (
      grid[row][0] !== "" &&
      grid[row][0] === grid[row][1] &&
      grid[row][1] === grid[row][2]
    ) {
      winner = grid[row][0]; // Return the winner ("X" or "O")
    }
  }

  // Check all columns
  for (let col = 0; col < size; col++) {
    if (
      grid[0][col] !== "" &&
      grid[0][col] === grid[1][col] &&
      grid[1][col] === grid[2][col]
    ) {
      winner = grid[0][col]; // Return the winner ("X" or "O")
    }
  }

  // Check the main diagonal
  if (
    grid[0][0] !== "" &&
    grid[0][0] === grid[1][1] &&
    grid[1][1] === grid[2][2]
  ) {
    winner = grid[0][0]; // Return the winner ("X" or "O")
  }

  // Check the anti-diagonal
  if (
    grid[0][2] !== "" &&
    grid[0][2] === grid[1][1] &&
    grid[1][1] === grid[2][0]
  ) {
    winner = grid[0][2]; // Return the winner ("X" or "O")
  }

  if (winner !== null) {
    let status = document.getElementById("status");

    status.textContent = `Congratulations! ${winner} is the Winner!`;

    status.classList.add("you-won");
  }
};

const loadFunction = () => {
  const divs = document.querySelectorAll("#board > div");

  let row = 0;
  let col = 0;

  // Add the same class to all divs
  divs.forEach((div) => {
    //for styling purposes
    div.className = "square";

    //for grid placement purposes
    div.setAttribute("data-row", row);
    div.setAttribute("data-col", col);

    // Move to the next column
    col++;

    // If we reach the end of a row, reset the column and move to the next row
    if (col === 3) {
      col = 0;
      row++;
    }

    //for hover functionality
    div.addEventListener("mouseover", () => {
      div.classList.add("hover");
    });

    div.addEventListener("mouseleave", () => {
      div.classList.remove("hover");
    });
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
    //click functionality for squares
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

      checkWin(grid);
    });
  });

  //click functionality for button
  const resetButton = document.querySelector(".btn");
  console.log(resetButton);

  resetButton.addEventListener("click", () => {
    //reset grid

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        grid[row][col] = "";
      }
    }

    //reset squares
    const divs = document.querySelectorAll("#board > div");

    divs.forEach((div) => {
      div.textContent = '';
    })

    //reset status message

    let status = document.getElementById("status");

    status.textContent =
      "Move your mouse over a square and click to play an X or an O.";

    status.classList.remove("you-won");
  });
};
