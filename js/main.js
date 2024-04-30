////defining basic functions
//addition
function add(a, b) {
    a = Number(a);
    b = Number(b);
    return (a + b).toFixed(5);
}
//subtraction
function subtr(a, b) {
    a = Number(a);
    b = Number(b);
    return (a - b).toFixed(5);
}
//multiplication
function multi(a, b) {
    a = Number(a);
    b = Number(b);
    return (a * b).toFixed(5);
}
//division
function divi(a, b) {
    a = Number(a);
    b = Number(b);
    return (a / b).toFixed(5);
}

////general calculator function
function operate(a, b, c) {
    switch (a) {
        case 'a':
            let resa = add(b, c);
            return resa;
            break;
        case 's':
            let ress = subtr(b, c);
            return ress;
            break;
        case 'm':
            let resm = multi(b, c);
            return resm;
            break;
        case 'd':
            if (c===0) {
                displayShow('nope! try again');
                console.log('don\'t divide by 0')
            } else {
                let resd = divi(b, c);
                return resd;
            }
            break;
        default:
            console.log('something went wrong!');
    }
}

//display
function displayShow(value) {
    document.querySelector('#displayBox').innerText = `${value}`;
    console.log(value);
}

//clear function
function clearAll() {
    displayShow(0);
    inputFirst = undefined
    inputSecond = undefined
    operatorUsed = undefined
}

///keeping track of nrs + buttons
//goal is just to get the job done
let inputFirst
let inputSecond
let operatorUsed

function firstInputNumber(num) {
    inputFirst += num
}
function secondInputNumber(num) {
    inputSecond += num
}
function operatorInput(oper) {
    operatorUsed = oper
}

function buttonPress(num) {
    if (inputFirst===undefined) {
        inputFirst = `${num}`;
        displayValue = inputFirst;
    } else if (inputFirst!==undefined && operatorUsed===undefined) {
        firstInputNumber(num);
        displayValue = inputFirst;
    } else if (operatorUsed!==undefined && inputSecond===undefined) {
        inputSecond = `${num}`;
        displayValue = inputSecond;
    } else if (inputSecond!==undefined) {
        secondInputNumber(num);
        displayValue = inputSecond;
    } else {
        console.log(`something went wrong with the ${num} button!`);
    };
    displayShow(displayValue);
}

////buttons
//clear and enter
document.getElementById('clearB').addEventListener('click', () => {
    clearAll();
});

document.getElementById('enterB').addEventListener('click', () => {
    if (operatorUsed!==undefined && inputSecond!==undefined) {
        displayValue = operate(operatorUsed,inputFirst,inputSecond);
        inputFirst = displayValue;
        operatorUsed = undefined;
        inputSecond = undefined;
        displayShow(displayValue);
    } else {
        console.log('something went wrong with the enter button!');
    };
});

//operations
document.getElementById('addB').addEventListener('click', () => {
    operatorUsed = 'a';
});

document.getElementById('subB').addEventListener('click', () => {
    operatorUsed = 's';
});

document.getElementById('mulB').addEventListener('click', () => {
    operatorUsed = 'm';
});

document.getElementById('divB').addEventListener('click', () => {
    operatorUsed = 'd';
});

//numbers
document.getElementById('b1').addEventListener('click', () => {
    buttonPress(1);
});

document.getElementById('b2').addEventListener('click', () => {
    buttonPress(2);
});

document.getElementById('b3').addEventListener('click', () => {
    buttonPress(3);
});

document.getElementById('b4').addEventListener('click', () => {
    buttonPress(4);
});

document.getElementById('b5').addEventListener('click', () => {
    buttonPress(5);
});

document.getElementById('b6').addEventListener('click', () => {
    buttonPress(6);
});

document.getElementById('b7').addEventListener('click', () => {
    buttonPress(7);
});

document.getElementById('b8').addEventListener('click', () => {
    buttonPress(8);
});

document.getElementById('b9').addEventListener('click', () => {
    buttonPress(9);
});

document.getElementById('b0').addEventListener('click', () => {
    buttonPress(0);
});

/////on start
let displayValue = 0; //not ideal but let's let it be for now
displayShow(displayValue);

////WHAT's LEFT?
//1. Pressing number button after getting the result with = doesn't automatically clear prev. Idea: T/F if = has just been executed?
//2. decimals button (note: remember only one . allowed...)
//3. make it less ugly
//4. backspace?
//5. keyboard support?