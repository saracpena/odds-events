// this is state
const state = {
    allNums: [],
    odds: [],
    evens: [],
};

// render to HTML
function render() {
  document.body.innerHTML = "";

  document.body.append(
    NumberForm(),
    NumberBank(),
    SortButtons(),
    OddsSection(),
    EvensSection()
  );
}

function addNumber(number) {
  state.allNums.push(number);
}

function sortNumber() {
  const number = state.allNums.shift();

  if (number === undefined) return;

  if (number % 2 === 0) {
    state.evens.push(number);
  } else {
    state.odds.push(number);
  }
}

function sortAll() {
  while (state.allNums.length > 0) {
    sortNumber();
  }
}

render();