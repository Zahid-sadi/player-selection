document.getElementById('budget-btn').addEventListener('click',function(){

    const budgetField = document.getElementById('budget-field');
    const budgetFieldValueString = budgetField.value;
    const newBudget = parseInt(budgetFieldValueString);
    // console.log(newBudget)

    const playersNumber = document.getElementById('player-list'.lastChild);
    const playersNUmberString = playersNumber.innerText

})