$(document).ready(function () {
  populateTable();
});

function populateTable() {
  var sourceContent = $("#unit-details-data").text().trim();
  var destinationTable = $("#unit-details");
  var tableBody = destinationTable.find("tbody");
  var rows = sourceContent.split("\n");
  var hasThirdColumn = false;
  var validFormat = true;

  tableBody.empty(); // Clear any existing rows in the table body

  rows.forEach(function (row) {
    var columns = row.split("|").map(function (col) {
      return col.trim(); // Trim spaces around each part
    });

    if (columns.length < 2) {
      validFormat = false;
      return;
    }

    if (columns.length === 3 && columns[2] !== "") {
      hasThirdColumn = true;
    } else {
      columns[2] = ""; // Ensure there is always a third cell, even if empty
    }

    var newRow = $("<tr>").addClass("table_row");
    columns.forEach(function (col) {
      newRow.append($("<td>").addClass("table_cell").text(col));
    });
    tableBody.append(newRow);
  });

  // Remove third column if no row contains data for it
  if (!hasThirdColumn) {
    destinationTable.find("th:nth-child(3), td:nth-child(3)").remove();
  }

  if (!validFormat) {
    destinationTable.addClass("hide");
  } else {
    destinationTable.removeClass("hide");
  }
}
