// this is state
let allNums = [];
const odds = [];
const evens = [];

// render to HTML
function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    ${NumberForm()}
    ${NumberBank()}
    ${SortButtons()}
    ${Odds()}
    ${Evens()}
  `;

  const form = document.querySelector("#number-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("#number-input");

    addNumber(Number(input.value));

    render();
  });

  const sortOne = document.querySelector("#sort-one");

  sortOne.addEventListener("click", () => {
    sortNumber();
    render();
  });

  const sortAllBtn = document.querySelector("#sort-all");

  sortAllBtn.addEventListener("click", () => {
    sortAll();
    render();
  });
}

function NumberForm() {
  return `
    <form id="number-form">
      <input id="number-input" type="number">
      <button>Add Number</button>
    </form>
  `;
}

function SortButtons() {
  return `
    <section>
      <button id="sort-one">Sort 1</button>
      <button id="sort-all">Sort All</button>
    </section>
  `;
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
      <h2>Odds</h2>
      <p>${odds.join(", ")}</p>
    </section>
  `;
}


function Evens() {
  return `
    <section>
      <h2>Evens</h2>
      <p>${evens.join(", ")}</p>
    </section>
  `;
}

function addNumber(number) {
  allNums.push(number);
}

function sortNumber() {
  const number = allNums[0];

  // Edge case: no numbers left to sort
  if (number === undefined) {
    return;
  }

  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }

  allNums = allNums.filter((num, index) => {
    return index !== 0;
  });
}

function sortAll() {
  while (allNums.length > 0) {
    sortNumber();
  }
}

render();