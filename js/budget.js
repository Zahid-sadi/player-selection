
function getElementValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
     const inputFieldValue = parseFloat(inputFieldValueString);
     inputField.value = '';
    return inputFieldValue;

    
}

function getElementTextById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.innerText;
    const inputFieldValue = parseFloat(inputFieldValueString);
    
    return inputFieldValue;
}

//  function for amount of adding
function getTotalValue( elementId, newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue;
} 

document.getElementById('budget-btn').addEventListener('click',function(){

    const newBudget = getElementValueById('budget-field');
   

    const playersNumber = document.getElementById('players-list').getElementsByTagName('li');
    const totalPlayersString = playersNumber.length;
    const totalPlayers = parseFloat(totalPlayersString);
    playersNumber.length = playersNumber;
    
    
    const previousTotalExpenses = totalPlayers * newBudget;
    playersNumber.length = playersNumber;
    
    
    const playersExpenses = document.getElementById('players-expenses');
    const playersExpensesString = playersExpenses.innerText;
    const newExpense = parseFloat(playersExpensesString);

    const totalPlayersExpenses = newExpense + previousTotalExpenses;
    playersExpenses.innerText = totalPlayersExpenses;

   

})

document.getElementById('sub-total-btn').addEventListener('click',function(){

    const coachCost = getElementValueById('coach-cost')
    const managerCost = getElementValueById('manager-cost')
    const previousSubTotal = coachCost + managerCost;
    const totalPlayerCost = getElementTextById('players-expenses');
    const newSubTotal = previousSubTotal + totalPlayerCost;
    const subtotalRemaing = getElementTextById('sub-total');
    getTotalValue('sub-total', newSubTotal);

})