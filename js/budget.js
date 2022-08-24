
document.getElementById('sub-total-btn').addEventListener('click',function(){

    const coachCost = getElementValueById('coach-cost')
    const managerCost = getElementValueById('manager-cost')
    const previousSubTotal = coachCost + managerCost;
    const totalPlayerCost = getElementTextById('players-expenses');
    const newSubTotal = previousSubTotal + totalPlayerCost;
    const subtotalRemaing = getElementTextById('sub-total');
    getTotalValue('sub-total', newSubTotal);

})