const spenton = document.querySelector("#spenton");

const allTotal = document.querySelector("#alltotal");

const listitem = document.querySelector("#expenseHtml");


let amount = 0;

allTotal.textContent = amount;

let fullAmount = [];

function totalExpenses() {

    const descAll = {};

    const inputExpense = document.querySelector("#amountspent");
    const expense = inputExpense.value;
    let inputAmount = parseInt(expense, 10);
    const item = spenton.value;

    descAll.inputAmount = inputAmount;
    descAll.item = item;
    descAll.moment = new Date();
    fullAmount.push(descAll);

    amount = amount + inputAmount;

    allTotal.textContent = `Total : ${amount}`;

    renderList(fullAmount);

} 
       
const element = document.querySelector("#total");

element.addEventListener("click", totalExpenses, false);

var moment = new Date();

// date function
function getDateString(momento) {
    return momento.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// update total function
// function updateTotal() {
//     amount -= inputAmount;
//     let someText = `Total: ${amount}`;
//     allTotal.textContent = someText;
//   }

// delete function
function deleteItems(dateValue) {
    const newItems = fullAmount.filter(
        expenses => expenses.moment.valueOf() !== dateValue
      );
        renderList(newItems);
        // updateTotal();
}

function renderList(arrOfList) {
    const expenseHtml = arrOfList.map(expenses =>
        createListItem(expenses)
      );
      const joinedallexpencesHtml = expenseHtml.join("");
      listitem.innerHTML = joinedallexpencesHtml;
      fullAmount = arrOfList;
}

function createListItem({ item, inputAmount, moment }) {
    return `
        <li class="list-group-item d-flex justify-content-between">
        <div class="d-flex flex-column">
            ${item}
            <small class="text-muted">${getDateString(moment)}</small>
        </div>
        <div>
        <span class="px-5">${inputAmount}</span>
        <button 
            type="button" 
            class="btn btn-outline-danger btn-sm" 
            onclick="deleteItems(${moment.valueOf()})"
            >
            <i class="fa fa-trash fa-lg"></i>
        </button>
        </div>
    </li>`;
}