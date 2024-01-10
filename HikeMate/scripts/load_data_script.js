document.addEventListener('DOMContentLoaded', function () {
	// Function to convert CSV string to a 2D array
	function csvToArray(csv) {
			const rows = csv.split('\n');
			return rows.map(row => row.split(','));
	}

	// Function to generate HTML table from a 2D array
	function arrayToTable(data) {
			const table = document.getElementById('csvTable');
			const tbody = document.createElement('tbody');

			data.forEach(rowData => {
					const row = document.createElement('tr');
					rowData.forEach(cellData => {
							const cell = document.createElement('td');
							cell.textContent = cellData;
							row.appendChild(cell);
					});
					tbody.appendChild(row);
			});

			table.appendChild(tbody);
	}

	// Function to fetch and process the CSV file
	function fetchCSV() {
			fetch('./data/hiking.csv') 
					.then(response => response.text())
					.then(csv => {
							const dataArray = csvToArray(csv);
							arrayToTable(dataArray);
					})
					.catch(error => console.error('Error fetching CSV:', error));
	}

	// Call the fetchCSV function to load and display the CSV data
	fetchCSV();
});