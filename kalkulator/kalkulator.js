function Calculator(operator){
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    switch(operator){
        case '+':
            var result = parseFloat(first) + parseFloat(second);         
        break;
        case '-':
            var result = parseFloat(first) - parseFloat(second);         
        break;  
        case 'x':
            var result = parseFloat(first) * parseFloat(second);         
        break;  
        case '/':
            var result = parseFloat(first) / parseFloat(second);         
        break; 
    }
    document.getElementById('result').value = '= ' + result;
}