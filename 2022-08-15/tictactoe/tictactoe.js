let stepCount = 0;
const minimumStepCountToCheckWinner = 5;
const cells = document.querySelectorAll('[data-cell]');
const maxStepCount = cells.length;
let userSign = 'X';

// LÉPÉSEK: 
// Játék elindítása, ha gombra akkor kell gomb, és eseményfigyelő
// táblázatba a jel megjelenítése
// PROG: ha tettek egy cellába jelet, akkor leveszem az eseményfigyelőt, 
// vagy ha a textContent nem üres, akkor nem lépük, azaz nem csinálunk semmit. 
// lépés után a jel cserélése (X helyett O , O helyett X)
// ellenőrizzük, hogy kell-e nyertes viszgálni (stepCount >= minimumStepCountToCheckWinner)
// ha ellenőrizni kell a nyertest: 
// ellenőrizzük a sorokat
// ellenőrizzük az oszlopokat
// ellenőrizzük az átlókat
// HA van nyertes, eredményt hírdetünk
// HA van nyertes, nem engedünk többet lépni

function addCellEventListener() {
  cells.forEach(cell => cell.addEventListener('click', step));
}

function step() {}

function writeSignInToTheCell() {}

function removeCellEventListener() {}

function changeUserSign() {
  userSign = userSign = 'X' ? 'O' : 'X';
}

function checkWinner() {}
function checkRows() {}
function checkColumns() {}
function checkDiagonal() {}
function endGame() {}

addCellEventListener();