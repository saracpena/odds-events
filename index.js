// this is state
let allNums = [];
const odds = [];
const evens = [];

// render to HTML
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = 
  `
  ${NumberForm()},
  ${NumberBank()},
  ${SortButtons()},
  ${Odds()},
  ${Evens()}
  `;
}

function NumberForm() {
    return `
    <form>
    <input type="number">
    <button>Add Number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
    </form>
    `
}

function NumberBank() {
    return `
    <section>
        <h2>Number Bank</h2>
        <p>${allNums.join(", ")}</p>
    </section>`
}


function Odds() {
    return `
    <section>
        <h2>Number Bank</h2>
        <p>${odds.join(", ")}</p>
    </section>`
}


function Evens() {
    return `
    <section>
        <h2>Number Bank</h2>
        <p>${evens.join(", ")}</p>
    </section>`
}

function addNumber(number) {
  allNums.push(number);
}

function sortNumber() {
  const number = allNums[0];
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
  allNums = allNums.filter((num, index) => {
    return index !==0;
  });
}

function sortAll() {
  while (allNums.length > 0) {
    sortNumber();
  }
}

render();