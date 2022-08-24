// function for getting value from input field 
function getElementValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
     const inputFieldValue = parseFloat(inputFieldValueString);
     inputField.value = '';
    return inputFieldValue;

    
}

// function for getting value from except input field 
function getElementTextById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.innerText;
    const inputFieldValue = parseFloat(inputFieldValueString);
    
    return inputFieldValue;
}


function getTotalValue( elementId, newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue;
} 