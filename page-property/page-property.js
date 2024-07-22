$(document).ready(function () {
  populateTableFromDiv();
});

function populateTableFromDiv() {
  // Get the source content
  const sourceContent = document.getElementById("unit-details-data");
  const destinationTable = document.getElementById("unit-details");

  // Check if the source content exists
  if (!sourceContent) {
    destinationTable.classList.add("hide");
    return;
  }

  const tableHead = destinationTable.querySelector("thead");
  const tableBody = destinationTable.querySelector("tbody");

  // Clear any existing rows in the table body
  tableBody.innerHTML = "";

  // Get the text content and split it by lines
  const lines = sourceContent.textContent.trim().split("\n");
  let hasThreeColumns = true;

  for (let line of lines) {
    // Check if line contains the delimiter
    if (!line.includes("|")) {
      sourceContent.classList.add("hide");
      return;
    }

    const parts = line.split("|").map((part) => part.trim());

    if (parts.length < 2) {
      continue;
    }

    // Create a new table row with class "table_row"
    const row = document.createElement("tr");
    row.classList.add("table_row");

    // Create cells and populate with content from parts
    parts.forEach((part, index) => {
      if (index < 3) {
        // Ensure we don't exceed 3 parts
        const cell = document.createElement("td");
        cell.classList.add("table_cell");
        cell.textContent = part;
        row.appendChild(cell);
      }
    });

    // Append row to the table body
    tableBody.appendChild(row);

    // Check if the current row has only 2 cells
    if (parts.length < 3) {
      hasThreeColumns = false;
    }
  }

  // Adjust table head columns based on the number of columns
  if (!hasThreeColumns) {
    const headers = tableHead.querySelectorAll("th");
    if (headers.length === 3) {
      headers[2].remove(); // Remove third column header
    }
  }

  // Add 'hide' class to the source content element
  sourceContent.classList.add("hide");
  // Remove 'hide' class from the destination table
  destinationTable.classList.remove("hide");
}
