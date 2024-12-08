////defining basic functions
//addition
function add(a, b) {
    a = Number(a);
    b = Number(b);
    return (a + b);
}
//subtraction
function subtr(a, b) {
    a = Number(a);
    b = Number(b);
    return (a - b);
}
//multiplication
function multi(a, b) {
    a = Number(a);
    b = Number(b);
    return (a * b);
}
//division
function divi(a, b) {
    a = Number(a);
    b = Number(b);
    return (a / b);
}

////general calculator function
function operate(a, b, c) {
    c = Number(c);
    b = Number(b);
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
                console.log('don\'t divide by 0');
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
    /* something's not working with limiting this...
    if (Number.isInteger(value)) {
        document.querySelector('#displayBox').innerText = `${value}`;
    } else {
        document.querySelector('#displayBox').innerText = `${value.toFixed(3)}`;
    }
    */
    console.log(value);
}

//clear function
function clearAll() {
    displayShow(0);
    inputFirst = undefined
    inputSecond = undefined
    operatorUsed = undefined
    enterPressed = false
}

///keeping track of nrs + buttons
//goal is just to get the job done
let inputFirst
let inputSecond
let operatorUsed
let enterPressed = false

function firstInputNumber(num) {
    inputFirst += num
}
function secondInputNumber(num) {
    inputSecond += num
}
/*
function operatorInput(oper) {
    operatorUsed = oper
}
*/

function buttonPress(num) {
    if (inputFirst===undefined) {
        inputFirst = `${num}`;
        displayValue = inputFirst;
    } else if (inputFirst!==undefined && operatorUsed===undefined && enterPressed==true) {
        clearAll();
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
        enterPressed = true;
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
//1. decimal button (note: remember only one . allowed)
//2. make it less ugly
//3. backspace?
//4. keyboard support?
// make code nicer !!!
